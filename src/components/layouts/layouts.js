import React from 'react'
import Header from '../Header.js'
import SideBar from '../SideBar.js'
import Footer from '../footer.js'


class Layout extends React.Component {
    render (){
        return(
            <div className="layout">
                <Header />
                <SideBar />
                <Footer />
            </div>            
        )
    }
}


export default Layout