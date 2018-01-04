import React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Label,
  Input,
  Button,
  LargeButton,
  mediaQueries,
  colors
} from '@hackclub/design-system'

export const Error = Text.extend.attrs({
  className: 'error',
  color: 'error',
  f: 1,
  ml: 1
})`
  text-transform: lowercase;
  &:before { content: '— '; }
`

export const Required = () => (
  <Text.span className="required" color="primary" f={1} ml={1} children="*" />
)

export const Field = ({
  type = 'text',
  name = 'name',
  label,
  p,
  children,
  error,
  required,
  ...props
}) => {
  const Tag = Input.withComponent(
    ['textarea', 'select'].indexOf(type) === -1 ? 'input' : type
  )
  return (
    <Label className={type} mb={2} id={name}>
      <Flex align="center" mb="25rem" style={{ display: 'inline' }} wrap>
        {label}
        {required ? <Required /> : null}
        {error && <Error children={error} />}
      </Flex>
      <Tag
        name={name}
        type={type}
        height={type === 'textarea' ? '10rem' : 'inherit'}
        placeholder={p}
        children={children}
        {...props}
      />
    </Label>
  )
}

export const Submit = ({ lg, ...props }) => {
  const Tag = props.lg
    ? LargeButton.withComponent('input')
    : Button.withComponent('input')
  return <Tag type="submit" {...props} />
}

export const FormWrapper = Flex.withComponent(Container).extend`
  flex-direction: column;
`

export const Form = Container.withComponent('form').extend.attrs({
  py: 4,
  px: 3,
  maxWidth: 48
})`
  display: grid;
  grid-gap: 1rem;
  ${mediaQueries[1]} {
    grid-template-columns: repeat(1, 1fr);
    h2, .textarea { grid-column: 1 / -1; }
  }
`

export const Subheading = Heading.h2.extend.attrs({
  f: 4,
  color: 'primary'
})`
  text-transform: capitalize;
`

const HeadingBox = Box.extend.attrs({
  mr: 3
})`
  text-align: left;
  order: 1;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  ${mediaQueries[1]} {
    flex-basis: 7rem;
    text-align: right;
  }
`

const FieldsBox = Box.extend.attrs({})`
  order: 2;
  flex-grow: 1;
`

export const Fieldset = props => (
  <Flex flexDirection={['column', 'row']}>
    <HeadingBox>
      <Subheading id={props.section}>{props.section}</Subheading>
    </HeadingBox>
    <FieldsBox>{props.children}</FieldsBox>
  </Flex>
)

export const Aside = props => <Box bg="snow" {...props} />
