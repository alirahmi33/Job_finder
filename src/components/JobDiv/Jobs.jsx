import React from 'react'


// Imported Icons ===== >
import { BiTimeFive } from 'react-icons/bi';

// Imported Images ======>
import logo1 from '../../Assets/logo1.jpg';
import logo2 from '../../Assets/logo2.jpg';
import logo3 from '../../Assets/logo3.png';
import logo4 from '../../Assets/logo4.jpg';
import logo5 from '../../Assets/logo5.jpg';
import logo6 from '../../Assets/logo6.png';
import logo7 from '../../Assets/logo7.jpg';
import logo8 from '../../Assets/logo8.jpg';

//For all jobs, we are going to use high order array method called Map...
// In this case we shall list all jobs into an array called Data...

const Data =[
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem Ipsum, dolor sit amet consectetur adipiscing elit. Corrupti,laboriosam!',
    company:'Novac Linus Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'UI Designer',
    time: '5Hrs',
    location: 'Manscheter',
    desc: 'Lorem Ipsum, dolor sit amet consectetur adipiscing elit. Corrupti,laboriosam!',
    company:'Liquid Accessments'
  },
  {
    id:3,
    image: logo3,
    title: 'Data science Analyst',
    time: '10Hrs',
    location: 'UK',
    desc: 'Lorem Ipsum, dolor sit amet consectetur adipiscing elit. Corrupti,laboriosam!',
    company:'Meda tech'
  },
  {
    id:4,
    image: logo4,
    title: 'Web Designer',
    time: '2Hrs',
    location: 'Saudia',
    desc: 'Lorem Ipsum, dolor sit amet consectetur adipiscing elit. Corrupti,laboriosam!',
    company:'arowa tech'
  },
  {
    id:5,
    image: logo5,
    title: 'Frontend Developer',
    time: '12Hrs',
    location: 'Russia',
    desc: 'Lorem Ipsum, dolor sit amet consectetur adipiscing elit. Corrupti,laboriosam!',
    company:'Wazino Agency'
  },
  {
    id:6,
    image: logo6,
    title: 'Backend Developer',
    time: '9Hrs',
    location: 'Tunisia',
    desc: 'Lorem Ipsum, dolor sit amet consectetur adipiscing elit. Corrupti,laboriosam!',
    company:'Teca Agency'
  },
  {
    id:7,
    image: logo7,
    title: 'Fullstack Developer',
    time: '2d',
    location: 'Egypt',
    desc: 'Lorem Ipsum, dolor sit amet consectetur adipiscing elit. Corrupti,laboriosam!',
    company:'Weno Agency'
  },
  {
    id:8,
    image: logo8,
    title: 'Software Eng',
    time: '10Hrs',
    location: 'Filand',
    desc: 'Lorem Ipsum, dolor sit amet consectetur adipiscing elit. Corrupti,laboriosam!',
    company:'midano Agency'
  },
]

 // This is a single company, lets see how to map it...

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        
        {
          Data.map(({id,image,title,time,location,desc,company}) => {

            return(
              // This will return a single job post based on th ID
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px]
         hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor
             group-hover:text-white'>{title}</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive />{time}
            </span>
          </span>
          <h6 className='text-[#ccc]'>{location}</h6>

          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]'>
            {desc}
          </p>

          <div className='company flex items-center gap-2'>
            <img src={image} alt="Company Logo" className='w-[10%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>
              {company}
            </span>
          </div>

          <button className='border-[2px] rounded-[10px] block p-[10px] w-full 
          text-[14px] font-semibold text-textColor hover:bg-white
           group-hover/item:text-textColor group-hover:text-white'>
            Apply Now
          </button>
        </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs