const PortifoliCardInfo = (props) => {
    const { portofolioData } = props;
    return (
      <>
        {portofolioData.map((portofolio) => {
          return (
            <div key={portofolio.id}
              className={`portfolio-content-item col-5 col-md-3 
               ${portofolio.id%2===0?'bg-secondary':'bg-black'}
               text-light text-center py-5`}
            >
              {portofolio.title} <hr className="w-50 m-auto mt-2" />
            </div>
          );
        })}
      </>
    );
  };
  
  export default PortifoliCardInfo;
  