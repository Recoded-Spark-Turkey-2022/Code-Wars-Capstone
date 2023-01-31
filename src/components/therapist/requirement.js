import { useNavigate } from 'react-router-dom';
import HeaderBooking from '../booking/HeaderBooking';
import Requirementparagraph from './requirementparagraph';
import Image from './Images/laptop.svg';

const Requirement = () => {
    const navigate = useNavigate();

    const buttonHanler = (e)=>{
        e.preventDefault();
        navigate("/TherapistAccount")

    }
  return (
    <div className="flex lg:flex-row ">
      <div className=" flex-1 ">
        <HeaderBooking Header="Why work with Healing?" />

        <Requirementparagraph
          header="Reliable Income"
          paragraph="Over 10,000 people sign up on BetterHelp every day looking for a counselor to help with life’s challenges. BetterHelp can be your main source of income (full time) or a supplement to your current work."
        />
        <Requirementparagraph
          header="Focus on Counseling"
          paragraph="No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!"
        />
        <Requirementparagraph
          header="Focus on Counseling"
          paragraph="No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!"
        />
        <HeaderBooking Header="Requirements" />
        <ul className="ml-20 list-inside flex flex-col gap-3 " style={{ listStyleType: 'disc' }}>
          <li>
            <span className="text-slate-500">
              Licensed by a State Board to provide counseling{' '}
            </span>
          </li>
          <li>
            <span className="text-slate-500">
              Experience in counseling for adults, couples, and/or teens{' '}
            </span>
          </li>
          <li>
            
            <span className="text-slate-500">
              Excellent writing skills
            </span>
          </li>
          <li>
            {' '}
            <span className="text-slate-500">
              {' '}
              Reliable Internet connection
            </span>{' '}
          </li>
          <li>
            {' '}
            <span className="text-slate-500">
              {' '}
              Currently residing in the US
            </span>{' '}
          </li>
        </ul>
        <button type="submit" className='lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white ml-20 mt-10' onClick={buttonHanler} > Get started </button>

      </div>
      <div className="flex-1 flex justify-center self-start pt-10 ">
        <img src={Image} alt="laptop" />
      </div>
    </div>
  );
};
export default Requirement;