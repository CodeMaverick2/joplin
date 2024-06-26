import { MenuItemLocation } from './api/types';
import ViewController from './ViewController';

export default class MenuItemController extends ViewController {

	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Old code before rule was applied
	public constructor(id: string, pluginId: string, store: any, commandName: string, location: MenuItemLocation) {
		super(id, pluginId, store);

		this.store.dispatch({
			type: 'PLUGIN_VIEW_ADD',
			pluginId: pluginId,
			view: {
				id: this.handle,
				type: this.type,
				commandName: commandName,
				location: location,
			},
		});
	}

	public get type(): string {
		return 'menuItem';
	}

}
