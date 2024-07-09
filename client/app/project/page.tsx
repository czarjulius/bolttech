'use client';

import Project from '../components/Project';

export default function ProjectPage() {
  return (
    <div className="h-screen w-screen flex justify-between bg-[#fff] p-10">
      <div className="w-[40%]">
        <form
          className="flex flex-col items-center justify-center bord"
          style={{ width: '90%', padding: '20px', border: '1px solid #dddd', borderRadius: '4px' }}
        >
          <h1>Create Project</h1>
          <div>
            <input
              style={{
                height: '30px',
                borderRadius: '4px',
                width: '100%',
                marginBottom: '20px',
                marginTop: '10px',
                border: '1px solid #dddd',
              }}
            />
          </div>
          <button
            style={{ height: '30px', borderRadius: '8px', backgroundColor: 'green', width: '100%', color: '#fff' }}
            type="button"
          >
            Create Project
          </button>
        </form>
      </div>
      <div className="w-[60%]">
        <Project />
      </div>
    </div>
  );
}
