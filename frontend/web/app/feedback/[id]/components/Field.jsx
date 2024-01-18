
export default function Field({field, value, onChange}) {
  return field.questionType === "Short answer" ? (
    <div id={field.question} className="subject w-full lg:w-2/3 transition-all">
            <div className="label"><p>{field.question} <sub><small>{"(optional)"}</small></sub></p></div>
            <input placeholder="Write your answer here..." className="textFields text-slate-950 placeholder:text-slate-600" type="text" id="subject"  />
          </div>
  ):field.questionType === "Long answer"?(
    <div id={field.question} className="description w-full lg:w-2/3 transition-all">
            <div className="label"><p>{field.question}</p></div>
            <textarea className="textFields text-slate-950 placeholder:text-slate-600" id="descriptionField" cols="30" rows="10" placeholder="Describe your case..." ></textarea>
          </div>
  ):field.questionType === "MCQ"?(
    <div id={field.question} className="text-xl text-[#42445D] flex flex-col gap-3 w-full">
            <h1>{field.question}</h1>
            <form action="" className=" flex flex-row justify-evenly px-24 items-center w-full gap-4 text-2xl font-semibold">
              {field.options.map((el, index)=>(
              <label key={index} class="flex flex-row gap-2 justify-center items-center ">
                <input type="checkbox" value={el} className=" checked:text-slate-950 appearance-none h-3 w-3 bg-transparent border-2 border-[#42445D] checked:bg-[#42445D] rounded-sm scale-150  "name="checkbox1" style={{}} />
                <p>{el}</p>
              </label>))}
            </form>
          </div>
  ):
  <></>
}
