import React from 'react'
import './achievement.css'
import '../../../responsive.css';
const Achievement = () => {
  return (
    <>
    <div className="achievement-container">
        <div className="achievement-left">
            <div className="achievement-left-paragraph">
                Enim quae voluptatibus odio est tempora molestiae. Quod sed et libero. Mollitia perspiciatis consequuntur qui eveniet voluptas harum culpa.
            </div>
            <div className="achievement-left-counter">
                <div className="achievement-left-counter-user">
                    <div className="achievement-left-counter-user-count">10K+</div>
                    <div className="achievement-left-counter-user-title">Total User</div>

                </div>
                <div className="achievement-left-counter-employee">
                    <div className="achievement-left-counter-employee-count">2K+</div>
                    <div className="achievement-left-counter-employee-title">Employee</div>
                </div>
                <div className="achievement-left-counter-happyUser">
                <div className="achievement-left-counter-happyUser-count">8K+</div>
                    <div className="achievement-left-counter-happyUser-title">Happy User</div>
                </div>

            </div>
        </div>
        <div className="achievement-right">
            <div className="achievement-right-paragraph">
            Healthcare that way you want it. Simple,convenient and reliable
            </div>
        </div>
    </div>
    </>
  )
}

export default Achievement