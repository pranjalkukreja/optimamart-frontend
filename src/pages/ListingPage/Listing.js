import React, { useState, useEffect } from "react";
import BlackNavigation from '../../components/BlackNavigation/BlackNavigation'
import TopCategories from '../category/TopCategories'
import SideSubCategories from '../category/SideSubCategories'
import { Menu, Checkbox } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import BestSellers from "../../components/home/BestSellers";
import { getCategories } from "../../functions/category";
import { getSubs } from "../../functions/sub";
import { createSecondSub, getSecondSubs, getSecondSub, removeSecondSub } from "../../functions/secondSub"






const Listing = () => {

    const { SubMenu, ItemGroup } = Menu;
    const [categories, setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    const [subs, setSubs] = useState([]);
    const [sub, setSub] = useState("")
    const [secondSubs, setSecondSubds] = useState([]);

    useEffect(() => {
        // loadCategories();
        loadSubs();
        loadSecondSubs();
      }, []);
    
      const loadCategories = () =>
        getCategories().then((c) => setCategories(c.data));
    
      const loadSubs = () => getSubs().then((s) => setSubs(s.data));
    
      const loadSecondSubs = () => getSecondSubs().then((t) => setSecondSubds(t.data));
    

    const title="Brows"
    const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
        //   onChange={handleCheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
        <br />
      </div>
    ));

    return (
        <>
 
        <BlackNavigation title="Browse Aisles" />

        <div className="pdl-page">
        <div className="flex-content_container product-view_browse-pill-aisles">
        <TopCategories />
        <div>



        <div className="col-md-3" style={{backgroundColor: "red"}}>

            {/* {subs.map((e) => (
               <Menu defaultOpenKeys={["1", "2"]} mode="inline">
                   <SubMenu key={e._id} title={e.name}>
                    <div>
                        yellow
                    </div>
                   </SubMenu>

               </Menu>
            ))} */}
            </div>


        <div className="">
            <div>
                <div className="product-view product-view-search">
                    <BestSellers />
                </div>
            </div>
        </div>



        </div>
       

        </div>
        </div>
        


        </>
    )
}

export default Listing;