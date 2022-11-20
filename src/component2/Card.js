
import img4 from '../img/6.jpg'
import img1 from '../img/3.jpg'
import img2 from '../img/4.jpg'
import img3 from '../img/5.jpg'
export default function Card(){
    return(
         <div className="row p-4">
             <div className="col-4">
                    <img className="bd-placeholder-img card-img-top" src={img4}></img>


              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
             <div className="col-4">
                    <img className="bd-placeholder-img card-img-top" src={img2}></img>


              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
             <div className="col-4">
                    <img className="bd-placeholder-img card-img-top" src={img3}></img>


              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        
    )
}