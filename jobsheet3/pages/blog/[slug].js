import { useRouter } from 'next/router';

const BLogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>Blog Post: {slug}</h1>
            <p>Ini adalah blog post dengan slurg {slug}.</p>
        </div>
    );
};

export default BLogPost;