import css from "./Layout.module.scss"

function Layout({children} : {children: React.ReactNode}) {
    return (
        <div className={css.layout}>
            {children}
        </div>
    )
}

export default Layout
