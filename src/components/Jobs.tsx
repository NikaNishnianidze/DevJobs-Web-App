import filterIcon from "../../public/assets/mobile/icon-filter.svg";
import searchIcon from "../../public/assets/desktop/icon-search.svg";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import { JobInfo } from "../Types";

const Jobs = () => {
  const navigate = useNavigate();

  const handleInfo = (job: JobInfo) => {
    navigate(`/home/${job.id}`);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="filter-div w-[327px]  flex items-center relative bottom-7">
        <input
          type="text"
          className="w-[327px] p-[16px] rounded-[6px] bg-input dark:bg-input-dark dark:text-[#fff]"
          placeholder="Filter by title…"
        />
        <div className="icons flex items-center absolute gap-[24px] right-[16px]">
          <img
            src={filterIcon}
            alt="filter icon"
            className="dark:filter dark:brightness-0 dark:invert"
          />
          <div className="w-[48px] h-[48px] rounded-[6px] flex flex-col items-center justify-center bg-search-icon ">
            <img
              src={searchIcon}
              alt="search Icon"
              className="filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
      <div className="jobs-list flex flex-col gap-[49px] mt-[40px]">
        {data.map((job) => {
          return (
            <div
              key={job.id}
              onClick={() => handleInfo(job)}
              className="w-[327px] py-[36px] px-[32px] relative bg-input rounded-[6px] dark:bg-input-dark"
            >
              <div
                style={{ backgroundColor: job.logoBackground }}
                className={`jobs-background w-[50px] h-[50px]  flex flex-col items-center rounded-[20px] justify-center absolute -top-6`}
              >
                <img src={job.logo} alt="job logo" />
              </div>
              <div className="times flex items-center mt-[5px] gap-[12px]">
                <p className="text-[#6E8098] text-[16px] font-normal">
                  {job.postedAt}
                </p>
                <div className="oval w-[4px] h-[4px] bg-oval"></div>
                <p className="text-[#6E8098] text-[16px] font-normal">
                  {job.contract}
                </p>
              </div>
              <div className="position mt-[16px]">
                <p className="text-[#19202D] text-[18px] font-bold dark:text-[#fff]">
                  {job.position}
                </p>
              </div>
              <div className="company mt-[17px]">
                <p className="text-[#6E8098] text-[16px] font-normal">
                  {job.company}
                </p>
              </div>
              <div className="country mt-[44px]">
                <p className="text-[#5964E0] text-[14px] font-bold">
                  {job.location}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
