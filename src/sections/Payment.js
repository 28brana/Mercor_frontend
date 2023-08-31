const Payment = () => {
  return (
    <div className="payment-screen [background-color:#F8F6F6] border relative h-screen">
      <div className=" xl:w-96 lg:w-60 w-4/5 absolute xl:[left:15%] lg:[left:10%] [left:5%] lg:[top:30%] [top:5%]">
        <h1 className="font-primary [font-size:40px] text-primary">Payments</h1>
        <p className="font-secondary text-base">
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </p>
      </div>
    </div>
  );
};

export default Payment;
