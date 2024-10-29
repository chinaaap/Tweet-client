import apiClient from '@/lib/apiClient';
import { PostType, Profile } from '@/types';
import { GetServerSideProps } from 'next';
import React from 'react';

// type Props = {
//     profile: Profile;
// };
type Props = {
    params: {
        userId: string;
    };
    posts: PostType[];
};

// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//     const { userId } = context.query;

// const UserProfile = ({ profile }: Props) => {

const UserProfile = async ({ params }: Props) => {
    const { userId } = params;

    let profile: Profile | null = null;
    let posts: PostType;

    //     try {
    //         const profileResponse = await apiClient.get(`/users/profile/${userId}`);

    //         return {
    //             props: {
    //                 profile: profileResponse.data,
    //             },
    //         };
    //     } catch (err) {
    //         console.log(err);
    //         return {
    //             notFound: true,
    //         };
    //     }
    // };
    try {
        const profileResponse = await apiClient.get(`/users/profile/${userId}`);
        profile = profileResponse.data;
        const postsResponse = await apiClient.get(`/posts/${userId}`);
        posts = postsResponse.data;
    } catch (err) {
        console.log(err);
        // Handle error or return a fallback UI
    }

    if (!profile) {
        return <div className="text-center py-8">User profile not found.</div>;
    }


    return (
        <div className="container mx-auto px-4 py-8">
            <div className="w-full max-w-xl mx-auto">
                <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <div className="flex items-center">
                        <img className="w-20 h-20 rounded-full mr-4"
                            alt="User Avatar"
                            src={profile.profileImageUrl} />
                        <div>
                            <h2 className="text-2xl font-semibold mb-1">
                                {profile.user?.username || "Username"}
                            </h2>
                            <p className="text-gray-600">{profile.bio}</p>
                        </div>
                    </div>
                </div>
                {posts.map((post: PostType) => (
                    <div className="bg-white shadow-md rounded p-4 mb-4" key={post.id}>
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <img className="w-10 h-10 rounded-full mr-2"
                                    alt="User Avatar"
                                    src={profile.profileImageUrl} />
                                <div>
                                    <h2 className="font-semibold text-md">{post.author.username}</h2>
                                    <p className="text-gray-500 text-sm">
                                        {new Date(post.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700">{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserProfile;
