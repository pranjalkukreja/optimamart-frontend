import React, { useState, useEffect } from "react";
import TopCategories from '../../pages/category/TopCategories'
import BlackNavigation from '../../components/BlackNavigation/BlackNavigation'
import SideSubCategories from '../../pages/category/SideSubCategories'
import { Menu, Slider, Checkbox, Radio } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { DownSquareOutlined } from "@ant-design/icons";
import { getCategories, getCategorySubs, getCategory } from "../../functions/category";
import ProductCard from "../../components/cards/ProductCard";
import {
    fetchProductsByFilter,
} from "../../functions/product";



const ProduceAisle = ({match}) => {

    const { SubMenu, ItemGroup } = Menu;
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("");
    const [subs, setSubs] = useState([]);
    const [subOptions, setSubOptions] = useState([]);
    const [products, setProducts] = useState([]);

    let dispatch = useDispatch();
    const { slug } = match.params;


    useEffect(() => {
        setLoading(true);
        getCategory(slug).then((res) => {
            console.log(JSON.stringify(res.data, null, 4));
            setCategory(res.data.category);
            setProducts(res.data.products);
            getCategorySubs(res.data.category._id).then((res1) => {
                console.log("SUB OPTIONS ON CATGORY CLICK", res1.data);
                setSubOptions(res1.data);
            });

            setLoading(false);
        })
    }, []);

    const handleSub = (sub) => {
        setSubs(sub);
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: "" },
        });
        fetchProducts({ sub });
    };

    const fetchProducts = (arg) => {
        fetchProductsByFilter(arg).then((res) => {
            setProducts(res.data);
        });
    };

    const showSubs = () =>
        subOptions.map((s) => (
            <div
                key={s._id}
                onClick={() => handleSub(s)}
                className="p-1 m-1 badge badge-secondary"
                style={{ cursor: "pointer" }}
            >
                {s.name}
            </div>
        ));

    return (
        <div className="">
            <BlackNavigation title={category.name} />
            <TopCategories />
            <div className="row">
                <div className="col-md-3 pt-2">

                    <hr />

                    {/* <SideSubCategories title="Vegetables" subOptions={subOptions} /> */}

                    {/* {subOptions.map((c) => */}

                    <Menu
                        defaultOpenKeys={["1", "2", "3", "4", "5", "6", "7"]}
                        mode="inline">

                        <SubMenu
                            key="4"
                            title={
                                <span className="h6">
                                    <DownSquareOutlined /> Sub Categories
    </span>
                            }
                        >
                            <div style={{ maringTop: "-10px" }} className="pl-4 pr-4">
                                {showSubs()}
                            </div>
                        </SubMenu>
                    </Menu>
                </div>

                <div className="col-md-9 pt-2">
                    {loading ? (
                        <h4 className="text-danger">Loading...</h4>
                    ) : (
                            <h4 className="text-danger">Products</h4>
                        )}

                    <div className="row pb-5">
                        {products.map((p) => (
                            <div className="col" key={p._id}>
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProduceAisle;