
import { NextResponse } from "next/server";
import qrcode from 'qrcode';
import axios from "axios";
import connect from "../../../../lib/db/connection";
import Stations from "../../../../lib/db/models/Stations";
import Authorities from "../../../../lib/db/models/Authorities";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export const dynamic = 'force-dynamic'

export async function GET(req){
    try {
        const headersList = headers();
        const token = headersList.get('authToken');
        
        const db = await connect()
        const obj = jwt.verify(token,process.env.JWT_SECRET)
        
        if(obj){
        const body = await Authorities.findById(obj.authorityId)
        console.log(body)
        let stations = await Stations.find()
        
        return NextResponse.json({stations:stations, success:true})
        }
        return NextResponse.json({message:"authorization failed", success:false})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:error})
    }
}