import React from 'react'
import PrivateSidebar from '../PrivateHeader/PrivateSidebar'
import PrivateWorkplace from '../PrivateWorkplace/PrivateWorkplace'

const PrivateDashboard = () => {
    return (
        <div style={{ display: "flex" }}>
            <PrivateSidebar />
            <PrivateWorkplace />
        </div>
    )
}

export default PrivateDashboard