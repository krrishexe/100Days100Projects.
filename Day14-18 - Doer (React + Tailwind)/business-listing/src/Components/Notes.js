import React from 'react'
import "../media/css/Notes.css"
import FontAwesomeIcon from 'react-fontawesome'

const Notes = () => {
  return (
    <div>
      <div className='notesBody'>
        <h1 className='heading1'> You can write your Notes here : </h1>



        <div className="cards">

          <div className="card active">
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <FontAwesomeIcon icon="fa-solid fa-clouds" />
              </div>
              <div className="info">
                <div className="title">Spring</div>
                <div>Nature Looks Attractive</div>
              </div>
            </div>
          </div>


          <div className="card active">
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">

              </div>
              <div className="info">
                <div className="title">Spring</div>
                <div>Nature Looks Attractive</div>
              </div>
            </div>
          </div>

          <div className="card active">
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">

              </div>
              <div className="info">
                <div className="title">Spring</div>
                <div>Nature Looks Attractive</div>
              </div>
            </div>
          </div>

          <div className="card active">
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">

              </div>
              <div className="info">
                <div className="title">Spring</div>
                <div>Nature Looks Attractive</div>
              </div>
            </div>
          </div>




        </div>

      </div>
    </div>
  )
}

export default Notes
