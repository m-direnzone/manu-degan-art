import { Helmet } from 'react-helmet';
import { metaData } from "../data/metaData";
import { PageType } from '../interface';

interface DynamicHelmetProps {
    page: PageType
}
const DynamycHelmet = ({page}: DynamicHelmetProps) => {  
    const meta = metaData[page] || metaData.home;
    return (
        <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
        </Helmet>
    );
}

export default DynamycHelmet;
