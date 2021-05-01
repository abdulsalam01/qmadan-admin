import React from "react";
import List from "../../components/Category/list";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

const Index = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <Header title='Category' description='category-list'/>
                    <List/>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default Index;