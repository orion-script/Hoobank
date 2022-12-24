import airbnb from "../assets/airbnb.ac0ba47e.png";
import binance from "../assets/binance.ef218256.png";
import coinbase from "../assets/coinbase.fd06c89f.png";
import dropbox from "../assets/dropbox.fb49a0e9.png";

function Partners() {
  return (
    <div className="bg-background w-full py-10 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-52 items-center w-4/5 md:w-11/12 m-auto">
        <img src={airbnb} alt="airbnb" />
        <img src={binance} alt="binance" />
        <img src={coinbase} alt="coinbase" />
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
}

export default Partners;
