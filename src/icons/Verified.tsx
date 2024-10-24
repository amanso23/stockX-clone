interface Props {
    className: string
}

const Verified: React.FC<Props> = ({ className }) => {
    return (

        <svg viewBox="0 0 50 50" focusable="false" className={className}>
            <path
                d="M22.9 31.1L17.2 25.4L18.7999 23.8L22.7999 27.9L31.1 18.8L32.7999 20.4L22.9 31.1Z"
                fill="currentColor">
            </path>
            <path
                d="M25 45.3L20 40.4L13.1 41.4L11.9 34.5L5.69998 31.2L8.69998 25L5.59998 18.7L11.8 15.4L13 8.49998L19.9 9.49998L24.9 4.59998L29.9 9.49998L36.8 8.49998L38 15.4L44.2 18.7L41.3 25L44.4 31.3L38.2 34.6L37 41.5L30.1 40.5L25 45.3ZM20.8 38.1L25 42.2L29.2 38.1L35.1 38.9L36.1 33.1L41.3 30.3L38.7 25L41.3 19.7L36.1 16.9L35.1 11.1L29.2 11.9L25 7.79998L20.8 11.9L14.9 11.1L13.9 16.9L8.69998 19.7L11.3 25L8.69998 30.3L13.9 33.1L14.9 38.9L20.8 38.1Z"
                fill="currentColor">
            </path>
        </svg>
    )
}

export default Verified