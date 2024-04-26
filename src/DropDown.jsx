import React from 'react'

const DropDown = ({title, options, fun}) => {
  return (
    <div className="select text-zinc-300 ">
    <select defaultValue={0} onChange={fun} name="format" id="format" className="h-10 w-40 bg-zinc-800 outline-none border-[1px] border-zinc-500 rounded-md py-2 px-2 text-lg cursor-pointer">
        <option value="0"  disabled>
            {title}
        </option>
        {options.map((c,i)=>(<option key={i} value={c}>
            {c.toUpperCase()}
        </option>))}
    </select>
</div>
  )
}

export default DropDown