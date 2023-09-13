import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post</span>
            </h1>
            <p className="desc text-left max-w-md">
                {type} and share your creative prompts with the world, and let your imagination run wild with any AI-powered platform.
            </p>
            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-3xl flex flex-col gap-7 glassmorphism"
            >
                <label >
                    <span className="font-satoshi font-semibold font-base text-gray-700">
                        Your AI prompt
                    </span>
                    <textarea
                        className="form_textarea"
                        value={post.prompt}
                        onChange={e => {
                            setPost({
                                ...post.prompt,
                                prompt: e.target.value
                            })
                        }}
                        required
                        placeholder="Write your prompt here"
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold font-base text-grey-700">
                        Tag
                        <span className="font-normal">(#product, #idea, #development)</span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={e => {
                            setPost({
                                ...post,
                                tag: e.target.value
                            })
                        }}
                        placeholder="#tag"
                        className="form_input"
                        required
                    />
                </label>
                <div className="flex justify-end items-center mx-3 mb-5 gap-4">
                    <button
                        type="submit"
                        className="rounded-full px-3 py-1.5 bg-primary-orange text-white text-md"
                        disabled={submitting}
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                    <Link
                        href='/'
                        className="text-gray-700 hover:text-gray-500 text-md"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </section>
    )
}

export default Form