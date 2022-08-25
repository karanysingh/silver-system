import Logo from './Logo';
import { Heading, InputBox, FormButton, FormSelectBox } from '../components/form/';
import { useState } from "react";
import "../components/form/form.scss"
import Progress from './Progress';


const Form = () => {
    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [workspaceName, setWorkspaceName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [url, setUrl] = useState('');
    const headingContent = [
        {
            title: 'Welcome! First things first...',
            subTitle: 'You can always change them later.'
        },
        {
            title: 'Let\'s set up a home for all your work.',
            subTitle: 'You can always create another workspace later.'
        },
        {
            title: 'How are you planning to use Eden?',
            subTitle: 'We\'ll streamline your setup experience accordingly.'
        },
        {
            title: `Congratulations, ${displayName}`,
            subTitle: 'You have completed onboarding, you can start using the Eden!'
        }
    ]

    return (
        <div className="form-root">
            <Logo />
            <Progress page={page} setPage={setPage} />
            <Heading {...headingContent[page - 1]} />
            {
                page === 1 ? <><InputBox state={name} setFunc={setName} heading="Full Name" placeholder="Steve Jobs" /> <InputBox state={displayName} setFunc={setDisplayName} heading="Display Name" placeholder="Steve" /></> :
                    page === 2 ? <><InputBox state={workspaceName} setFunc={setWorkspaceName} heading="Workspace Name" placeholder="Eden" /><InputBox state={url} setFunc={setUrl} heading="Workspace URL (optional)" example={"www.eden.com/"} placeholder="Example" /></> :
                        page === 3 ? <><FormSelectBox /></> : null

            }
            <FormButton content={page === 4 ? "Launch Eden" : "Create Workspace"} page={page} setPage={setPage} />
        </div>
    );
}

export default Form;