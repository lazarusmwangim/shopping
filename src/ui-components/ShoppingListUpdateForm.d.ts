/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ShoppingList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShoppingListUpdateFormInputValues = {
    name?: string;
    description?: string;
    price?: number;
    iamge?: string;
};
export declare type ShoppingListUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    iamge?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingListUpdateFormOverridesProps = {
    ShoppingListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    iamge?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShoppingListUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shoppingList?: ShoppingList;
    onSubmit?: (fields: ShoppingListUpdateFormInputValues) => ShoppingListUpdateFormInputValues;
    onSuccess?: (fields: ShoppingListUpdateFormInputValues) => void;
    onError?: (fields: ShoppingListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingListUpdateFormInputValues) => ShoppingListUpdateFormInputValues;
    onValidate?: ShoppingListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingListUpdateForm(props: ShoppingListUpdateFormProps): React.ReactElement;
