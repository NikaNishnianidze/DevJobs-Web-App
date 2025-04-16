import filterIcon from "../../public/assets/mobile/icon-filter.svg";
import searchIcon from "../../public/assets/desktop/icon-search.svg";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
import { JobInfo } from "../Types";
import { useState } from "react";
import locationIcon from "../../public/assets/desktop/icon-location.svg";

const Jobs = () => {
  const navigate = useNavigate();

  const [filterOpen, setFilterOpen] = useState<boolean>(false);

  const handleInfo = (job: JobInfo) => {
    navigate(`/home/${job.id}`);
  };

  const toggleFilter = () => {
    setFilterOpen(true);
  };

  return (
    <div className="flex flex-col items-center ">
      {filterOpen && (
        <div
          onClick={() => setFilterOpen(false)}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="box w-[327px] bg-input rounded-[6px] dark:bg-input-dark"
          >
            <div className="div-input flex items-center gap-[16px] p-[24px]">
              <img src={locationIcon} alt="location icon" />
              <input
                type="text"
                placeholder="Filter by location…"
                className="text-[#19202D] text-[16px] font-normal outline-none dark:text-[#fff]"
              />
            </div>
            <div className="divider w-[327px] h-[1px] bg-oval/20 mt-[14px]"></div>
            <div className="checkbox-div mt-[27px] px-[24px] flex items-center gap-[16px]">
              <input
                type="checkbox"
                id="time"
                className="appearance-none checked:bg-site focus:outline-none w-[24px] h-[24px] rounded-[3px] accent-site cursor-pointer bg-input-dark/10 dark:bg-white/10"
              />
              <label
                htmlFor="time"
                className="text-[#19202D] text-[16px] font-bold dark:text-[#fff]"
              >
                Full Time Only
              </label>
            </div>
            <div className="search-div mt-[24px] flex flex-col items-center mb-[24px]">
              <button className="w-[279px] py-[16px] rounded-[5px] text-[#fff] font-bold text-[16px] bg-site">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
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
            onClick={toggleFilter}
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
