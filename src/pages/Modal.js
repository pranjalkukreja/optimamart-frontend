import React from 'react'
import ReactDom from 'react-dom'


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function Modal({ open, children, onClose, header }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>

<div>
  <aside role="complementary" aria-label tabIndex={-1} className="modal_base modal_selector">
    <div id className="modal_container">
      <div className="modal_body">
        <div tabIndex={-1} className="modal_header">
          <div className="modal_left-header">
            {/**/}
          </div>
          <h2 className="modal_title"> {header} </h2>
          {/**/}<button onClick={onClose} aria-label="close dialog" className="modal_close">
            <div className="modal_close-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className>
                <title lang="en">Close</title>
                <desc />
                <g fill stroke>
                  <path d="M0.646 31.354c0.861 0.861 2.262 0.861 3.123 0l12.23-12.23 12.23 12.23c0.861 0.861 2.262 0.861 3.123 0s0.861-2.262 0-3.123l-12.23-12.23 12.23-12.23c0.861-0.861 0.861-2.262 0-3.123s-2.262-0.861-3.123 0l-12.23 12.23-12.23-12.23c-0.861-0.861-2.262-0.861-3.123 0s-0.861 2.262 0 3.123l12.23 12.23-12.23 12.23c-0.862 0.861-0.862 2.262 0 3.123z">
                  </path>
                </g>
              </svg></div>
          </button>
        </div>

        {children}

        {/**/}
        {/**/}
      </div>
    </div>
  </aside>
  <div className="modal_overlay" />
</div>
        </>,
        document.getElementById('portal')
      )
}
