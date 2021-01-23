import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;

  const history = useHistory();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/shop?${text}`);
  };

  return (

           <form action="#" className="typeahead-container" onSubmit={handleSubmit}>
        <div id="typeahead-container_input" className="typeahead-container_input spyglass-nav-group_wrapper">
          <div className="typeahead-container_input-field" >
            <div className="vector-icon-size--small typeahead-container_input-search-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Search" viewBox="0 0 28 28" role="presentation" aria-hidden="true" focusable="false" className>
                <title lang="en">Search</title>
                <desc />
                <g fill stroke>
                  <g>
                    <circle fill="none" cx="13.88" cy="13.66" r="9.28" />
                    <line x1="25.85" y1="25.63" x2="20.77" y2="20.54" />
                  </g>
                </g>
              </svg></div><input id="typeahead-search-input" type="search" placeholder="Search" autoComplete="on" aria-label="Search" onChange={handleChange} value={text}/>
          </div>
        </div>
      </form> 

    // <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
    //   <input
    //     onChange={handleChange}
    //     type="search"
    //     value={text}
    //     className="form-control mr-sm-2"
    //     placeholder="Search"
    //   />
    //   <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer" }} />
    // </form>
  );
};

export default Search;
