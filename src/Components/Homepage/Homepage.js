import React from "react";
import "../Homepage/Homepage.css"

function Homepage() {
    return (
        <div>
            <div className="Header">
                <div className="logo">
                    Gallery
                </div>
                <div className="auth">
                    <div className="log"><img src="https://www.w3schools.com/w3images/avatar6.png" /></div>
                    <div><button>Logout</button></div>
                </div>

            </div>
            <div className="Body">
                <img src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0&q=75" />
                <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/27032/s60-exterior-right-front-three-quarter-3.jpeg" />
                <img src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/12/mustang-1-1577523921.jpg" />
                <img src="https://imgd.aeplcdn.com/600x337/n/cw/ec/46994/jaguar-f-type-right-front-three-quarter18.jpeg?q=75" />
                <img src="https://images.hindustantimes.com/auto/img/2022/11/27/600x338/BMW_X6_M_Jahre_Edition_1666954911295_1669545715611_1669545715611.jpg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2X8KkE2wUJcIqkWuZPn4e85AxHSO0H6O8A&usqp=CAU" />
                <img src="https://i.insider.com/5731009252bcd022008c1d6f?width=750&format=jpeg&auto=webp" />
                {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rottentomatoes.com%2Fm%2Fpixels&psig=AOvVaw26mASpPKeFGQjqe98Oxi79&ust=1669731021542000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDj5_WG0fsCFQAAAAAdAAAAABAE" /> */}
                <img src="https://flxt.tmsimg.com/assets/p10933531_p_v8_ag.jpg" />
                <img src="https://media.zigcdn.com/media/model/2022/Apr/seltos-6_360x240.jpg" />
                <img src="https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/cms/uploads/qinx0kzzgjcxkuhpte6e" />

            </div>
            <div className="footer">
                <p>Author: Haraha Email:
                    <a href="mailto:harsha@gmail.com">hege@example.com</a>
                </p>
                <p>Copyright 1999-2022 by Refsnes Data. All Rights Reserved.
                    </p>


            </div>
        </div>
    )
}
export default Homepage;