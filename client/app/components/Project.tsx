export default function Project() {
  return (
    <div className="w-[50%] mb-4" style={{ border: '1px solid #dddd', borderRadius: '5px' }}>
      <div className="border-b-2 border-neutral-300 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 bg-[#EFEFEF] flex justify-between">
        <div>Edit</div>
        <div>
          <span
            style={{
              marginRight: '10px',
              fontSize: '12px',
              color: 'blue',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            edit
          </span>
          <span
            style={{
              marginRight: '10px',
              fontSize: '12px',
              color: 'blue',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            delete
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input type="checkbox" />
          <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="checkboxDefault1">
            Shooping
          </label>
        </div>
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input type="checkbox" />
          <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="checkboxDefault">
            Washing
          </label>
        </div>
      </div>
      <hr />
      <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        <div className="flex mt-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
          />
          <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal text-white bg-[green]">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
