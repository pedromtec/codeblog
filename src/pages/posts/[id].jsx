import { useRouter } from 'next/router'

export default function Post() {
    const router = useRouter()
    const postId = router.query?.id
    return (
        <h1>{postId}</h1>
    )
}