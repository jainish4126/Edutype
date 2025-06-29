import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef()
    let tx = 0;


    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jakshon</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Professors are knowledgeable, supportive, and always ready to help.
                       The teaching methods are modern and easy to understand.
                       Overall, the academic environment is inspiring and well-organized.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Jack rohss</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Campus life is vibrant with various events, clubs, and activities.
                       Students get many chances to explore their talents and interests.
                       From cultural fests to tech competitions, everything is well-managed.
                       It’s a great place to grow beyond the classroom.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>kinel cheks</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>The infrastructure is modern with smart classrooms and clean surroundings.
                        The library, labs, and Wi-Fi facilities are available and well-maintained.
                        Hostels are comfortable and safe for all students.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>micle michel</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>The university also helps a lot with placements and internships.
                        Top companies visit, and many students get good offers.
                        Career guidance and training programs are regularly conducted.
                        It truly prepares students for a bright and successful future.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
