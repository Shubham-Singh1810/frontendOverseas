import React from 'react';


function Notifications() {
  return (
    <div className="container mt-5 pt-5">
        <div className='mt-5 py-5 row'>
        <div className="col-md-9 col-12">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">Notifications</h5>
            <div className='d-flex my-2 mt-3'>
                <h6 className='badge bg-primary me-2'>Jobs</h6>
                <h6 className='badge bg-secondary me-2'>Applications</h6>
                <h6 className='badge bg-secondary me-2'>Profiles</h6>
            </div>
            <div className="list-group">
              <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1">Notification 1</h6>
                  <small>3 mins ago</small>
                </div>
                <p className="mb-1">This is a sample notification.</p>
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1">Notification 2</h6>
                  <small>1 hour ago</small>
                </div>
                <p className="mb-1">This is another sample notification.</p>
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-1">Notification 3</h6>
                  <small>2 days ago</small>
                </div>
                <p className="mb-1">This is yet another sample notification.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-3 text-center">
            <img className="img-fluid" src="/images/fullMobileNew.png" />
            <div className="row mx-2">
              <div className="col-4">
                <img className="img-fluid" src="/images/appQR.png" />
              </div>
              <div className="col-8 my-auto border rounded">
                <img
                  className="img-fluid"
                  src="https://overseas.ai/newfrontend/image/google-play.png"
                />
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Notifications;
