import React from 'react'
import BlogDetail from "./blog4/Detail";
import DetailOne from "./blog4/DetailOne"
import DetailTwo from "./blog4/DetailTwo"
import DetailThree from "./blog4/DetailThree"
import DetailFour from "./blog4/DetailFour"
import DetailFive from "./blog4/DetailFive"
import DetailSix from "./blog4/DetailSix"
import DetailSeven from "./blog4/DetailSeven"
import DetailEight from "./blog4/DetailEight"
import DetailNine from "./blog4/DetailNine"

const blogfour = () => {
  return (
    <>
        
        <div className="App">
            <BlogDetail />
            <div id="detail-one">
                <DetailOne />
            </div>
            <div id="detail-two">
                <DetailTwo />
            </div>
             <div id="detail-three">
                <DetailThree />
            </div>
             <div id="detail-four">
                <DetailFour />
            </div>
             <div id="detail-five">
                <DetailFive />
            </div>
             <div id="detail-six">
                <DetailSix />
            </div>
             <div id="detail-seven">
                <DetailSeven />
            </div>
             <div id="detail-eight">
                <DetailEight />
            </div>
             <div id="detail-nine">
                <DetailNine />
            </div>
        </div>
    </>
  )
}

export default blogfour