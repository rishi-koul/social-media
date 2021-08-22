import React from 'react'
import {useRouter} from "next/router"

function ProfilePage() {

    const router = useRouter()
    return (
        <div>
            {router.query.username}
        </div>
    )
}


export default ProfilePage
