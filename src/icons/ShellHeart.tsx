interface Props {
    className: string
}

const ShellHeart: React.FC<Props> = ({ className }) => {
    return (
        <svg viewBox="0 0 50 50" focusable="false" className={className}><path d="M25 44.2L24.6 44C9 38.4 8.5 26.5 8.5 26V9.69999L25 5.79999L41.5 9.69999V26C41.5 26.5 41.1 38.4 25.4 44L25 44.2ZM10.8 11.5V26C10.8 26.4 11.3 36.7 25 41.8C38.8 36.6 39.2 26.1 39.2 26V11.5L25 8.09999L10.8 11.5Z" fill="currentColor"></path><path d="M34.8002 21.8C34.8002 18.9 32.5002 16.6 29.6002 16.6C27.6002 16.6 26.1002 18.1 25.0002 19.7C23.9002 18 22.4002 16.6 20.4002 16.6C17.5002 16.6 15.2002 18.9 15.2002 21.8C15.2002 22.5 15.3002 23.1 15.5002 23.7C16.4002 26.7 24.9002 34.1 24.9002 34.1C24.9002 34.1 33.5002 26.7 34.3002 23.7C34.7002 23.1 34.8002 22.5 34.8002 21.8Z" fill="currentColor"></path></svg>
    )
}

export default ShellHeart