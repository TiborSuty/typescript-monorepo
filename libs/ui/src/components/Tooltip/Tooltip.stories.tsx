import {Tooltip} from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export function Basic() {
  return (
    <Tooltip
      label="This is Tooltip"
      description="Some tooltip text/description appears here"
      placement="right"
    >
      <span>Hover over me</span>
    </Tooltip>
  );
}

export function LabelOnly() {
  return (
    <Tooltip label="This is Tooltip">
      <span>Hover over me</span>
    </Tooltip>
  );
}

export function DescriptionOnly() {
  return (
    <Tooltip description="Some tooltip text/description appears here">
      <span>Hover over me</span>
    </Tooltip>
  );
}
