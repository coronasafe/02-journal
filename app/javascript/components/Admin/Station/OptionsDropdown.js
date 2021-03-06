import { Icon, Menu, MenuItem, Classes } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { IconNames } from "@blueprintjs/icons";
import useRequest from "@ahooksjs/use-request";

import { deleteStation } from "Apis/Admin/station";

const DeleteButton = ({ stationId, refresh }) => {
  const { run } = useRequest(deleteStation, {
    manual: true,
    onSuccess: refresh,
  });

  const handleDelete = () => {
    run(stationId);
  };

  return (
    <MenuItem icon={IconNames.TRASH} text="Delete" onClick={handleDelete} />
  );
};

export default function OptionsDropdown({ id, refresh }) {
  return (
    <Popover2
      placement="bottom-end"
      content={
        <Menu className={Classes.ELEVATION_1}>
          <DeleteButton stationId={id} refresh={refresh} />
        </Menu>
      }
    >
      <button type="button" className="flex items-center">
        <span>Options</span>
        <Icon
          icon={IconNames.CHEVRON_DOWN}
          className="w-5 h-5 mt-1 ml-2 -mr-1"
          aria-hidden="true"
        />
      </button>
    </Popover2>
  );
}
