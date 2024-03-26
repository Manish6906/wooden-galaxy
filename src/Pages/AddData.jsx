export default function AddData() {
  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Add Dining Data</h1>
        </div>

        <form className='mx-auto mb-0 mt-8 max-w-md space-y-6 shadow-lg p-5'>
          <div className='border rounded-md'>
            <label htmlFor='title' className='sr-only'>
              Title
            </label>

            <div className='relative'>
              <input
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter Title'
              />
            </div>
          </div>

          <div className='border rounded-md'>
            <label htmlFor='price' className='sr-only'>
              Price
            </label>

            <div className='border rounded-md relative'>
              <input
                type='text'
                className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter Price'
              />
            </div>
          </div>

          <label className=' block'>
            <span className='sr-only'>Choose profile photo</span>
            <input
              type='file'
              className='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    '
            />
          </label>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='inline-block rounded-lg bg-blue-500 px-5 py-2 w-full text-sm font-medium text-white'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
