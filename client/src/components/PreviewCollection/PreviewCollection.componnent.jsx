import React from "react";
import CollectionItem from "../collection-item/CollectionItem.component";
import {
    PreviewCollectionContainer,
    PreviewCollectionPreviewContainer,
    PreviewCollectionTitleContainer
} from "./PreviewCollection.styles";


const CollectionPreview = ({title, items}) => {
    return (
        <PreviewCollectionContainer>
            <PreviewCollectionTitleContainer>{title.toUpperCase()}</PreviewCollectionTitleContainer>
            <PreviewCollectionPreviewContainer>
                {
                    items.filter((item, index) => index < 4).map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </PreviewCollectionPreviewContainer>
        </PreviewCollectionContainer>
    )
}

export default CollectionPreview;