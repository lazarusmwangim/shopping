/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShoppingListCreateFormInputValues = {
    name?: string;
    description?: string;
    price?: number;
    iamge?: string;
};
export declare type ShoppingListCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    iamge?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShoppingListCreateFormOverridesProps = {
    ShoppingListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    iamge?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShoppingListCreateFormProps = React.PropsWithChildren<{
    overrides?: ShoppingListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShoppingListCreateFormInputValues) => ShoppingListCreateFormInputValues;
    onSuccess?: (fields: ShoppingListCreateFormInputValues) => void;
    onError?: (fields: ShoppingListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShoppingListCreateFormInputValues) => ShoppingListCreateFormInputValues;
    onValidate?: ShoppingListCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShoppingListCreateForm(props: ShoppingListCreateFormProps): React.ReactElement;
