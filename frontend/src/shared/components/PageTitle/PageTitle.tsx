interface IPageTitleProps {
    title: string;
}

export function PageTitle({ title }: IPageTitleProps) {
    return <h2 className='text-3xl mb-6 sm:mb-12 text-center'>{title}</h2>;
}
