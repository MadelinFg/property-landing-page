import Button from "../Button/Button"

import "./Category.css";

const Category = ({icon, title, description}) => {
    return <div className="category">
        <img src={icon} alt={title} className="icon" />
        <h4 className="category-title">{title}</h4>
        <p className="description">{description}</p>

        <Button customStyle="text-only" text="Check it" />
    </div>;
};

export default Category;