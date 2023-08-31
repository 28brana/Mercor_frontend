const Banking = () => {
  return (
    <div className="banking-screen bg-primary border relative  h-screen">
      <div className=" xl:w-96 lg:w-60 w-4/5 absolute xl:[left:15%] lg:[left:10%] [left:5%] lg:[top:30%] [top:5%]">
        <h1 className="font-primary [font-size:40px] text-white">Banking</h1>
        <p className="font-secondary text-base">
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
    </div>
  );
};

export default Banking;
