import react from 'react'

const SideSubCategories = ({ title, subOptions }) => {

  return (
    <>
      <aside className="flex-menu_wrapper flex-menu">
        <div className="flex-content_container list--border-right">
          <li className="spyglass-nav-group_wrapper sidebar-list_item sidebar-list_item-header"><span>{title}</span>
          </li>
        </div>
        <div className="sidebar-list_scroll flex-content_container list--border-right">
          <li className="spyglass-nav-group_wrapper sidebar-list_item sidebar-list_item-active"><span>Featured</span><span className="sidebar-list_icon-container">
            <div className="vector-icon-size--medium"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Next" viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" className="sidebar-list_carrot-right">
              <title lang="en">Next</title>
              <desc />
              <g fill stroke>
                <polyline fill="none" strokeLinecap="square" strokeWidth={2} points="13.2425 7.7575 21.728 16.2425 13.2425 24.728" />
              </g>
            </svg></div>
          </span>
            {/**/}
          </li>
          {subOptions.map((c) =>
            <li className="spyglass-nav-group_wrapper sidebar-list_item"><span>{c.name}</span>
            </li>
          )}
        </div>
      </aside>
    </>
  )
}

export default SideSubCategories;