import Category from "../comps/Category/Category";

import { categories } from "../../data/categories";

import "./Categories.css";

import House from "../../assets/svg/categories/House.svg";
import Apartment from "../../assets/svg/categories/Apartment.svg";
import Warehouse from "../../assets/svg/categories/Warehouse.svg";
import HomeOffice from "../../assets/svg/categories/HomeOffice.svg";

const Categories = () => {
    return (
        <div className="categories">
            <div className="categories-inner-container">
                <h5 className="subtitle">Property Category</h5>
                <h3 className="title">Choose Property by Category</h3>

                <div className="categories-container">
                    {categories.map((category, index) => {
                        return (
                            <Category
                                key={index}
                                icon={index === 1 ? Apartment : index === 2 ? HomeOffice : index === 3 ? Warehouse : House}
                                title={category.name}
                                description={category.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Categories;
