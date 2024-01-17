import connect from "../../../../lib/db/connection"
import Authorities from "../../../../lib/db/models/Authorities"
import Forms from "../../../../lib/db/models/Forms"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { headers } from "next/headers";

export async function POST(req){
    try {
        const headersList = headers();
        const token = headersList.get('authToken');
        const obj = jwt.verify(token,process.env.JWT_SECRET)
        const db = await connect()
        const bodyObject = await req.json()
        const oldAuthority = await Authorities.findById(obj.authorityId)
        console.log(oldAuthority)
        if(!oldAuthority || !(oldAuthority.role==="admin"||oldAuthority.role==="superadmin")){
        return NextResponse.json({message:"access denied"})
        }else{
            const oldForm = await Forms.findOne({stationId:bodyObject.stationId})
            if(oldForm){
                oldForm.fields = bodyObject.fields
                oldForm.authorityId = obj.authorityId
                oldForm.createdAt = Date.now()
                const updatedForm = await oldForm.save()
                return NextResponse.json({form:updatedForm, success:true})
            }
            const form =await Forms.create({fields:bodyObject.fields, authorityId:obj.authorityId, stationId:bodyObject.stationId, createdAt:Date.now()})
            return NextResponse.json({form:form, success:true})
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error})
    }
}

export async function PUT(req){
    try {
        const db = await connect()
        const bodyObject = await req.json()
        let oldForm = await Forms.findOne({stationId:bodyObject.stationId})
        if(!oldForm){
            oldForm = await Forms.findOne({stationId:"default"})
        }
            return NextResponse.json({form:oldForm, success:true})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error})
    }
}
