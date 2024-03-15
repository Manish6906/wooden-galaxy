export default function DBL({ title, data, img, desc }) {
  return (
    <>
      <section
        className='relative flex-col h-[417px] flex justify-center items-center'
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <h1 className='text-center font-poppins  font-medium leading-[115px] md:leading-[135px] text-[75px] md:text-[90px] mt-4'>
          {title}
        </h1>
        <p className='text-[20px] font-poppins  font-medium   leading-[30px]'>
          Browse the range <span className='scale-y-125'>&gt;</span>{" "}
          <span className='text-[#1A1A1A8F] font-poppins  font-medium leading-[30px]'>
            {title}
          </span>
        </p>
      </section>
      <section className='pt-8 pb-16'>
        <div className='header flex flex-col justify-center items-center'>
          <h1 className='text-[#AF835E] font-poppins font-medium text-[36px] md:text-[44px] leading-[54px] md:leading-[66px]'>
            {title}
          </h1>
          <p className='font-poppins  font-medium  text-center text-[28px] leading-[42px] text-[#000000]'>
            &ldquo;{desc}&rdquo;
          </p>
        </div>
      </section>

      <section className='space-y-8 px-[5%]'>
        {data.map((item) => {
          return (
            <div key={item.id} className=''>
              <CardHeading heading={item.title} />
              <div className='card-container md:gap-12 gap-5 sm:gap-8 lg:gap-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {item.data.map((val) => {
                  return <Card val={val} key={val.id} />;
                })}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

const CardHeading = ({ heading }) => {
  return (
    <h3 className='font-poppins font-medium  mb-6 text-[36px] md:text-[44px] leading-[54px] md:leading-[66px]'>
      {heading}
      <span className='scale-y-125 pl-2'>&gt;</span>
    </h3>
  );
};

const Card = ({ val }) => {
  return (
    <div className='card bg-[#F4F5F7] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      <img src={val.imageUrl} alt='' className='max-h-[405px] w-full' />
      <div className='content px-3 py-2'>
        <p className='font-poppins  font-normal  text-[16px] lg:text-[20px] leading-[100%] lg:leading-[30px] text-[#3E3A3A]'>
          {val.title}
        </p>
        <h3 className='font-poppins font-normal text-black text-[18px] lg:text-[26px] leading-[29px] lg:leading-[39px]'>
          {val.price}
        </h3>
      </div>
    </div>
  );
};
