import {useSelector } from 'react-redux'

export const Home = () => {
    const username = useSelector((state) => state.user.value.username)
    return (
        <h2>This is a Home Page of : {username}</h2>
    )
}