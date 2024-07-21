import clsx from 'clsx';

export const FooterMenu = () => {
    const footerItems = [
        { label: 'About Us', link: '#about' },
        { label: 'Services', link: '#services' },
        { label: 'Contact', link: '#contact' },
        { label: 'Privacy Policy', link: '#privacy' },
        { label: 'Terms of Use', link: '#terms' },
        { label: 'Careers', link: '#careers' },
        { label: 'Blog', link: '#blog' },
        { label: 'FAQ', link: '#faq' },
    ];

    return (
        <div
            className={clsx(
                'flex',
                'justify-center',
                'py-8',
                'bg-primary',
                'text-white'
            )}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {footerItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.link}
                        className={clsx('hover:underline', 'text-white')}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    );
};
