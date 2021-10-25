/* eslint-disable */

declare namespace GatsbyTypes {
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GatsbyResolverContext } from 'gatsby-plugin-typegen/types';
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  Portfolio_DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Portfolio_Upload: any;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly project: Maybe<SitePageContextProject>;
};

type SitePageContextProject = {
  readonly id: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};


type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly autoFix: Maybe<Scalars['Boolean']>;
  readonly language: Maybe<Scalars['String']>;
  readonly includeResolvers: Maybe<Scalars['Boolean']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly specialChars: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly _xsrcxxxgeneratedxxxgatsbyxschemaxgraphql: Maybe<Scalars['Boolean']>;
  readonly _xsrcxxxgeneratedxxxgatsbyxintrospectionxjson: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GraphQLSource = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
};

type Portfolio_About = {
  readonly id: Scalars['String'];
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly admin_id: Scalars['String'];
  readonly updatedAt: Scalars['Portfolio_DateTime'];
  readonly admin: Portfolio_Admin;
};


type Portfolio_Admin = {
  readonly id: Scalars['String'];
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly resumes: ReadonlyArray<Scalars['String']>;
  readonly confirmed: Scalars['Boolean'];
  readonly createdAt: Scalars['Portfolio_DateTime'];
  readonly updatedAt: Scalars['Portfolio_DateTime'];
  readonly _count: Maybe<Portfolio_AdminCount>;
};

type Portfolio_AdminCount = {
  readonly about: Scalars['Int'];
  readonly messages: Scalars['Int'];
  readonly projects: Scalars['Int'];
};

type Portfolio_AboutWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_AboutWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_AboutWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_AboutWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_AboutWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly title: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly admin: Maybe<Portfolio_AdminRelationFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_StringFilter = {
  readonly equals: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly lt: Maybe<Scalars['String']>;
  readonly lte: Maybe<Scalars['String']>;
  readonly gt: Maybe<Scalars['String']>;
  readonly gte: Maybe<Scalars['String']>;
  readonly contains: Maybe<Scalars['String']>;
  readonly startsWith: Maybe<Scalars['String']>;
  readonly endsWith: Maybe<Scalars['String']>;
  readonly mode: Maybe<Portfolio_QueryMode>;
  readonly not: Maybe<Portfolio_NestedStringFilter>;
};

type Portfolio_QueryMode =
  | 'default'
  | 'insensitive';

type Portfolio_NestedStringFilter = {
  readonly equals: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly notIn: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly lt: Maybe<Scalars['String']>;
  readonly lte: Maybe<Scalars['String']>;
  readonly gt: Maybe<Scalars['String']>;
  readonly gte: Maybe<Scalars['String']>;
  readonly contains: Maybe<Scalars['String']>;
  readonly startsWith: Maybe<Scalars['String']>;
  readonly endsWith: Maybe<Scalars['String']>;
  readonly not: Maybe<Portfolio_NestedStringFilter>;
};

type Portfolio_AdminRelationFilter = {
  readonly is: Maybe<Portfolio_AdminWhereInput>;
  readonly isNot: Maybe<Portfolio_AdminWhereInput>;
};

type Portfolio_AdminWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_AdminWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_AdminWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_AdminWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly email: Maybe<Portfolio_StringFilter>;
  readonly fname: Maybe<Portfolio_StringFilter>;
  readonly lname: Maybe<Portfolio_StringFilter>;
  readonly linkedIn: Maybe<Portfolio_StringFilter>;
  readonly whatsapp: Maybe<Portfolio_StringFilter>;
  readonly instagram: Maybe<Portfolio_StringFilter>;
  readonly github: Maybe<Portfolio_StringFilter>;
  readonly heroImage: Maybe<Portfolio_StringFilter>;
  readonly resumes: Maybe<Portfolio_StringNullableListFilter>;
  readonly confirmed: Maybe<Portfolio_BoolFilter>;
  readonly about: Maybe<Portfolio_AboutListRelationFilter>;
  readonly messages: Maybe<Portfolio_MessageListRelationFilter>;
  readonly projects: Maybe<Portfolio_ProjectListRelationFilter>;
  readonly password: Maybe<Portfolio_StringFilter>;
  readonly createdAt: Maybe<Portfolio_DateTimeFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_StringNullableListFilter = {
  readonly equals: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly has: Maybe<Scalars['String']>;
  readonly hasEvery: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly hasSome: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly isEmpty: Maybe<Scalars['Boolean']>;
};

type Portfolio_BoolFilter = {
  readonly equals: Maybe<Scalars['Boolean']>;
  readonly not: Maybe<Portfolio_NestedBoolFilter>;
};

type Portfolio_NestedBoolFilter = {
  readonly equals: Maybe<Scalars['Boolean']>;
  readonly not: Maybe<Portfolio_NestedBoolFilter>;
};

type Portfolio_AboutListRelationFilter = {
  readonly every: Maybe<Portfolio_AboutWhereInput>;
  readonly some: Maybe<Portfolio_AboutWhereInput>;
  readonly none: Maybe<Portfolio_AboutWhereInput>;
};

type Portfolio_MessageListRelationFilter = {
  readonly every: Maybe<Portfolio_MessageWhereInput>;
  readonly some: Maybe<Portfolio_MessageWhereInput>;
  readonly none: Maybe<Portfolio_MessageWhereInput>;
};

type Portfolio_MessageWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_MessageWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_MessageWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_MessageWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly subject: Maybe<Portfolio_StringFilter>;
  readonly from: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly read_status: Maybe<Portfolio_BoolFilter>;
  readonly answer_status: Maybe<Portfolio_BoolFilter>;
  readonly admin: Maybe<Portfolio_AdminRelationFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly answeredAt: Maybe<Portfolio_DateTimeFilter>;
  readonly createdAd: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_DateTimeFilter = {
  readonly equals: Maybe<Scalars['Portfolio_DateTime']>;
  readonly in: Maybe<ReadonlyArray<Scalars['Portfolio_DateTime']>>;
  readonly notIn: Maybe<ReadonlyArray<Scalars['Portfolio_DateTime']>>;
  readonly lt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly lte: Maybe<Scalars['Portfolio_DateTime']>;
  readonly gt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly gte: Maybe<Scalars['Portfolio_DateTime']>;
  readonly not: Maybe<Portfolio_NestedDateTimeFilter>;
};

type Portfolio_NestedDateTimeFilter = {
  readonly equals: Maybe<Scalars['Portfolio_DateTime']>;
  readonly in: Maybe<ReadonlyArray<Scalars['Portfolio_DateTime']>>;
  readonly notIn: Maybe<ReadonlyArray<Scalars['Portfolio_DateTime']>>;
  readonly lt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly lte: Maybe<Scalars['Portfolio_DateTime']>;
  readonly gt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly gte: Maybe<Scalars['Portfolio_DateTime']>;
  readonly not: Maybe<Portfolio_NestedDateTimeFilter>;
};

type Portfolio_ProjectListRelationFilter = {
  readonly every: Maybe<Portfolio_ProjectWhereInput>;
  readonly some: Maybe<Portfolio_ProjectWhereInput>;
  readonly none: Maybe<Portfolio_ProjectWhereInput>;
};

type Portfolio_ProjectWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_ProjectWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_ProjectWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_ProjectWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly image: Maybe<Portfolio_StringFilter>;
  readonly type: Maybe<Portfolio_StringFilter>;
  readonly github_url: Maybe<Portfolio_StringFilter>;
  readonly app_url: Maybe<Portfolio_StringFilter>;
  readonly summary: Maybe<Portfolio_StringFilter>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryListRelationFilter>;
  readonly questions: Maybe<Portfolio_QuestionListRelationFilter>;
  readonly sketches: Maybe<Portfolio_SketchListRelationFilter>;
  readonly admin: Maybe<Portfolio_AdminRelationFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly createdAt: Maybe<Portfolio_DateTimeFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_TechCategoryListRelationFilter = {
  readonly every: Maybe<Portfolio_TechCategoryWhereInput>;
  readonly some: Maybe<Portfolio_TechCategoryWhereInput>;
  readonly none: Maybe<Portfolio_TechCategoryWhereInput>;
};

type Portfolio_TechCategoryWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly techs: Maybe<Portfolio_TechListRelationFilter>;
  readonly project: Maybe<Portfolio_ProjectRelationFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_TechListRelationFilter = {
  readonly every: Maybe<Portfolio_TechWhereInput>;
  readonly some: Maybe<Portfolio_TechWhereInput>;
  readonly none: Maybe<Portfolio_TechWhereInput>;
};

type Portfolio_TechWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_TechWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_TechWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_TechWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryRelationFilter>;
  readonly tech_category_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_TechCategoryRelationFilter = {
  readonly is: Maybe<Portfolio_TechCategoryWhereInput>;
  readonly isNot: Maybe<Portfolio_TechCategoryWhereInput>;
};

type Portfolio_ProjectRelationFilter = {
  readonly is: Maybe<Portfolio_ProjectWhereInput>;
  readonly isNot: Maybe<Portfolio_ProjectWhereInput>;
};

type Portfolio_QuestionListRelationFilter = {
  readonly every: Maybe<Portfolio_QuestionWhereInput>;
  readonly some: Maybe<Portfolio_QuestionWhereInput>;
  readonly none: Maybe<Portfolio_QuestionWhereInput>;
};

type Portfolio_QuestionWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_QuestionWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_QuestionWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_QuestionWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly question: Maybe<Portfolio_StringFilter>;
  readonly answer: Maybe<Portfolio_AnswerRelationFilter>;
  readonly answer_id: Maybe<Portfolio_StringFilter>;
  readonly project: Maybe<Portfolio_ProjectRelationFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_AnswerRelationFilter = {
  readonly is: Maybe<Portfolio_AnswerWhereInput>;
  readonly isNot: Maybe<Portfolio_AnswerWhereInput>;
};

type Portfolio_AnswerWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_AnswerWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_AnswerWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_AnswerWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly answer: Maybe<Portfolio_StringFilter>;
  readonly question: Maybe<Portfolio_QuestionRelationFilter>;
};

type Portfolio_QuestionRelationFilter = {
  readonly is: Maybe<Portfolio_QuestionWhereInput>;
  readonly isNot: Maybe<Portfolio_QuestionWhereInput>;
};

type Portfolio_SketchListRelationFilter = {
  readonly every: Maybe<Portfolio_SketchWhereInput>;
  readonly some: Maybe<Portfolio_SketchWhereInput>;
  readonly none: Maybe<Portfolio_SketchWhereInput>;
};

type Portfolio_SketchWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_SketchWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_SketchWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_SketchWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly title: Maybe<Portfolio_StringFilter>;
  readonly description: Maybe<Portfolio_StringFilter>;
  readonly summary: Maybe<Portfolio_StringFilter>;
  readonly download_link: Maybe<Portfolio_StringFilter>;
  readonly image: Maybe<Portfolio_StringFilter>;
  readonly project: Maybe<Portfolio_ProjectRelationFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_AboutOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly title: Maybe<Portfolio_SortOrder>;
  readonly body: Maybe<Portfolio_SortOrder>;
  readonly admin: Maybe<Portfolio_AdminOrderByWithRelationInput>;
  readonly admin_id: Maybe<Portfolio_SortOrder>;
  readonly updatedAt: Maybe<Portfolio_SortOrder>;
};

type Portfolio_SortOrder =
  | 'asc'
  | 'desc';

type Portfolio_AdminOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly email: Maybe<Portfolio_SortOrder>;
  readonly fname: Maybe<Portfolio_SortOrder>;
  readonly lname: Maybe<Portfolio_SortOrder>;
  readonly linkedIn: Maybe<Portfolio_SortOrder>;
  readonly whatsapp: Maybe<Portfolio_SortOrder>;
  readonly instagram: Maybe<Portfolio_SortOrder>;
  readonly github: Maybe<Portfolio_SortOrder>;
  readonly heroImage: Maybe<Portfolio_SortOrder>;
  readonly resumes: Maybe<Portfolio_SortOrder>;
  readonly confirmed: Maybe<Portfolio_SortOrder>;
  readonly about: Maybe<Portfolio_AboutOrderByRelationAggregateInput>;
  readonly messages: Maybe<Portfolio_MessageOrderByRelationAggregateInput>;
  readonly projects: Maybe<Portfolio_ProjectOrderByRelationAggregateInput>;
  readonly password: Maybe<Portfolio_SortOrder>;
  readonly createdAt: Maybe<Portfolio_SortOrder>;
  readonly updatedAt: Maybe<Portfolio_SortOrder>;
};

type Portfolio_AboutOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_MessageOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_ProjectOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_AboutScalarFieldEnum =
  | 'id'
  | 'title'
  | 'body'
  | 'admin_id'
  | 'updatedAt';

type Portfolio_Answer = {
  readonly id: Scalars['String'];
  readonly answer: Scalars['String'];
  readonly question: Maybe<Portfolio_Question>;
};

type Portfolio_Question = {
  readonly id: Scalars['String'];
  readonly question: Scalars['String'];
  readonly answer_id: Scalars['String'];
  readonly project_id: Scalars['String'];
  readonly answer: Portfolio_Answer;
  readonly project: Portfolio_Project;
};

type Portfolio_Project = {
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly admin_id: Scalars['String'];
  readonly createdAt: Scalars['Portfolio_DateTime'];
  readonly updatedAt: Scalars['Portfolio_DateTime'];
  readonly _count: Maybe<Portfolio_ProjectCount>;
  readonly tech_categories: ReadonlyArray<Portfolio_TechCategory>;
  readonly questions: ReadonlyArray<Portfolio_Question>;
  readonly sketches: ReadonlyArray<Portfolio_Sketch>;
  readonly admin: Portfolio_Admin;
};


type Portfolio_Project_tech_categoriesArgs = {
  where: Maybe<Portfolio_TechCategoryWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_TechCategoryOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_TechCategoryWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarFieldEnum>>;
};


type Portfolio_Project_questionsArgs = {
  where: Maybe<Portfolio_QuestionWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_QuestionOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_QuestionWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_QuestionScalarFieldEnum>>;
};


type Portfolio_Project_sketchesArgs = {
  where: Maybe<Portfolio_SketchWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_SketchOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_SketchWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_SketchScalarFieldEnum>>;
};

type Portfolio_ProjectCount = {
  readonly tech_categories: Scalars['Int'];
  readonly questions: Scalars['Int'];
  readonly sketches: Scalars['Int'];
};

type Portfolio_TechCategory = {
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly project_id: Scalars['String'];
  readonly _count: Maybe<Portfolio_TechCategoryCount>;
  readonly techs: ReadonlyArray<Portfolio_Tech>;
  readonly project: Portfolio_Project;
};


type Portfolio_TechCategory_techsArgs = {
  where: Maybe<Portfolio_TechWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_TechOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_TechWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_TechScalarFieldEnum>>;
};

type Portfolio_TechCategoryCount = {
  readonly techs: Scalars['Int'];
};

type Portfolio_Tech = {
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly tech_category_id: Scalars['String'];
  readonly tech_categories: Portfolio_TechCategory;
};

type Portfolio_TechOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly name: Maybe<Portfolio_SortOrder>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryOrderByWithRelationInput>;
  readonly tech_category_id: Maybe<Portfolio_SortOrder>;
};

type Portfolio_TechCategoryOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly name: Maybe<Portfolio_SortOrder>;
  readonly techs: Maybe<Portfolio_TechOrderByRelationAggregateInput>;
  readonly project: Maybe<Portfolio_ProjectOrderByWithRelationInput>;
  readonly project_id: Maybe<Portfolio_SortOrder>;
};

type Portfolio_TechOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_ProjectOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly name: Maybe<Portfolio_SortOrder>;
  readonly image: Maybe<Portfolio_SortOrder>;
  readonly type: Maybe<Portfolio_SortOrder>;
  readonly github_url: Maybe<Portfolio_SortOrder>;
  readonly app_url: Maybe<Portfolio_SortOrder>;
  readonly summary: Maybe<Portfolio_SortOrder>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryOrderByRelationAggregateInput>;
  readonly questions: Maybe<Portfolio_QuestionOrderByRelationAggregateInput>;
  readonly sketches: Maybe<Portfolio_SketchOrderByRelationAggregateInput>;
  readonly admin: Maybe<Portfolio_AdminOrderByWithRelationInput>;
  readonly admin_id: Maybe<Portfolio_SortOrder>;
  readonly createdAt: Maybe<Portfolio_SortOrder>;
  readonly updatedAt: Maybe<Portfolio_SortOrder>;
};

type Portfolio_TechCategoryOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_QuestionOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_SketchOrderByRelationAggregateInput = {
  readonly _count: Maybe<Portfolio_SortOrder>;
};

type Portfolio_TechWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_TechScalarFieldEnum =
  | 'id'
  | 'name'
  | 'tech_category_id';

type Portfolio_TechCategoryWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_TechCategoryScalarFieldEnum =
  | 'id'
  | 'name'
  | 'project_id';

type Portfolio_QuestionOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly question: Maybe<Portfolio_SortOrder>;
  readonly answer: Maybe<Portfolio_AnswerOrderByWithRelationInput>;
  readonly answer_id: Maybe<Portfolio_SortOrder>;
  readonly project: Maybe<Portfolio_ProjectOrderByWithRelationInput>;
  readonly project_id: Maybe<Portfolio_SortOrder>;
};

type Portfolio_AnswerOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly answer: Maybe<Portfolio_SortOrder>;
  readonly question: Maybe<Portfolio_QuestionOrderByWithRelationInput>;
};

type Portfolio_QuestionWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly answer_id: Maybe<Scalars['String']>;
};

type Portfolio_QuestionScalarFieldEnum =
  | 'id'
  | 'question'
  | 'answer_id'
  | 'project_id';

type Portfolio_Sketch = {
  readonly id: Scalars['String'];
  readonly title: Scalars['String'];
  readonly description: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly download_link: Scalars['String'];
  readonly image: Scalars['String'];
  readonly project_id: Scalars['String'];
  readonly project: Portfolio_Project;
};

type Portfolio_SketchOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly title: Maybe<Portfolio_SortOrder>;
  readonly description: Maybe<Portfolio_SortOrder>;
  readonly summary: Maybe<Portfolio_SortOrder>;
  readonly download_link: Maybe<Portfolio_SortOrder>;
  readonly image: Maybe<Portfolio_SortOrder>;
  readonly project: Maybe<Portfolio_ProjectOrderByWithRelationInput>;
  readonly project_id: Maybe<Portfolio_SortOrder>;
};

type Portfolio_SketchWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_SketchScalarFieldEnum =
  | 'id'
  | 'title'
  | 'description'
  | 'summary'
  | 'download_link'
  | 'image'
  | 'project_id';

type Portfolio_AnswerWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_AnswerScalarFieldEnum =
  | 'id'
  | 'answer';

type Portfolio_Message = {
  readonly id: Scalars['String'];
  readonly subject: Scalars['String'];
  readonly from: Scalars['String'];
  readonly body: Scalars['String'];
  readonly read_status: Scalars['Boolean'];
  readonly answer_status: Scalars['Boolean'];
  readonly admin_id: Scalars['String'];
  readonly answeredAt: Scalars['Portfolio_DateTime'];
  readonly createdAd: Scalars['Portfolio_DateTime'];
  readonly admin: Portfolio_Admin;
};

type Portfolio_MessageWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_MessageOrderByWithRelationInput = {
  readonly id: Maybe<Portfolio_SortOrder>;
  readonly subject: Maybe<Portfolio_SortOrder>;
  readonly from: Maybe<Portfolio_SortOrder>;
  readonly body: Maybe<Portfolio_SortOrder>;
  readonly read_status: Maybe<Portfolio_SortOrder>;
  readonly answer_status: Maybe<Portfolio_SortOrder>;
  readonly admin: Maybe<Portfolio_AdminOrderByWithRelationInput>;
  readonly admin_id: Maybe<Portfolio_SortOrder>;
  readonly answeredAt: Maybe<Portfolio_SortOrder>;
  readonly createdAd: Maybe<Portfolio_SortOrder>;
};

type Portfolio_MessageScalarFieldEnum =
  | 'id'
  | 'subject'
  | 'from'
  | 'body'
  | 'read_status'
  | 'answer_status'
  | 'admin_id'
  | 'answeredAt'
  | 'createdAd';

type Portfolio_ProjectWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
};

type Portfolio_ProjectScalarFieldEnum =
  | 'id'
  | 'name'
  | 'image'
  | 'type'
  | 'github_url'
  | 'app_url'
  | 'summary'
  | 'admin_id'
  | 'createdAt'
  | 'updatedAt';

type Portfolio_AboutCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutAboutInput;
};

type Portfolio_AdminCreateNestedOneWithoutAboutInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutAboutInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutAboutInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
};

type Portfolio_AdminCreateWithoutAboutInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly password: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly resumes: Maybe<Portfolio_AdminCreateresumesInput>;
  readonly messages: Maybe<Portfolio_MessageCreateNestedManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectCreateNestedManyWithoutAdminInput>;
};

type Portfolio_AdminCreateresumesInput = {
  readonly set: ReadonlyArray<Scalars['String']>;
};

type Portfolio_MessageCreateNestedManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_MessageCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_MessageCreateOrConnectWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_MessageCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
};

type Portfolio_MessageCreateWithoutAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly subject: Scalars['String'];
  readonly from: Scalars['String'];
  readonly body: Scalars['String'];
  readonly read_status: Maybe<Scalars['Boolean']>;
  readonly answer_status: Maybe<Scalars['Boolean']>;
  readonly answeredAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly createdAd: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_MessageCreateOrConnectWithoutAdminInput = {
  readonly where: Portfolio_MessageWhereUniqueInput;
  readonly create: Portfolio_MessageCreateWithoutAdminInput;
};

type Portfolio_MessageCreateManyAdminInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_MessageCreateManyAdminInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_MessageCreateManyAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly subject: Scalars['String'];
  readonly from: Scalars['String'];
  readonly body: Scalars['String'];
  readonly read_status: Maybe<Scalars['Boolean']>;
  readonly answer_status: Maybe<Scalars['Boolean']>;
  readonly answeredAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly createdAd: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_ProjectCreateNestedManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_ProjectCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_ProjectCreateOrConnectWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_ProjectCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
};

type Portfolio_ProjectCreateWithoutAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryCreateNestedManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionCreateNestedManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchCreateNestedManyWithoutProjectInput>;
};

type Portfolio_TechCategoryCreateNestedManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_TechCategoryCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_TechCategoryCreateOrConnectWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_TechCategoryCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
};

type Portfolio_TechCategoryCreateWithoutProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly techs: Maybe<Portfolio_TechCreateNestedManyWithoutTech_categoriesInput>;
};

type Portfolio_TechCreateNestedManyWithoutTech_categoriesInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_TechCreateWithoutTech_categoriesInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_TechCreateOrConnectWithoutTech_categoriesInput>>;
  readonly createMany: Maybe<Portfolio_TechCreateManyTech_categoriesInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
};

type Portfolio_TechCreateWithoutTech_categoriesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type Portfolio_TechCreateOrConnectWithoutTech_categoriesInput = {
  readonly where: Portfolio_TechWhereUniqueInput;
  readonly create: Portfolio_TechCreateWithoutTech_categoriesInput;
};

type Portfolio_TechCreateManyTech_categoriesInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_TechCreateManyTech_categoriesInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_TechCreateManyTech_categoriesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type Portfolio_TechCategoryCreateOrConnectWithoutProjectInput = {
  readonly where: Portfolio_TechCategoryWhereUniqueInput;
  readonly create: Portfolio_TechCategoryCreateWithoutProjectInput;
};

type Portfolio_TechCategoryCreateManyProjectInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_TechCategoryCreateManyProjectInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_TechCategoryCreateManyProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type Portfolio_QuestionCreateNestedManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_QuestionCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_QuestionCreateOrConnectWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_QuestionCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
};

type Portfolio_QuestionCreateWithoutProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly question: Scalars['String'];
  readonly answer: Portfolio_AnswerCreateNestedOneWithoutQuestionInput;
};

type Portfolio_AnswerCreateNestedOneWithoutQuestionInput = {
  readonly create: Maybe<Portfolio_AnswerCreateWithoutQuestionInput>;
  readonly connectOrCreate: Maybe<Portfolio_AnswerCreateOrConnectWithoutQuestionInput>;
  readonly connect: Maybe<Portfolio_AnswerWhereUniqueInput>;
};

type Portfolio_AnswerCreateWithoutQuestionInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly answer: Scalars['String'];
};

type Portfolio_AnswerCreateOrConnectWithoutQuestionInput = {
  readonly where: Portfolio_AnswerWhereUniqueInput;
  readonly create: Portfolio_AnswerCreateWithoutQuestionInput;
};

type Portfolio_QuestionCreateOrConnectWithoutProjectInput = {
  readonly where: Portfolio_QuestionWhereUniqueInput;
  readonly create: Portfolio_QuestionCreateWithoutProjectInput;
};

type Portfolio_QuestionCreateManyProjectInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_QuestionCreateManyProjectInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_QuestionCreateManyProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly question: Scalars['String'];
  readonly answer_id: Scalars['String'];
};

type Portfolio_SketchCreateNestedManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_SketchCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_SketchCreateOrConnectWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_SketchCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
};

type Portfolio_SketchCreateWithoutProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly description: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly download_link: Scalars['String'];
  readonly image: Scalars['String'];
};

type Portfolio_SketchCreateOrConnectWithoutProjectInput = {
  readonly where: Portfolio_SketchWhereUniqueInput;
  readonly create: Portfolio_SketchCreateWithoutProjectInput;
};

type Portfolio_SketchCreateManyProjectInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_SketchCreateManyProjectInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_SketchCreateManyProjectInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly description: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly download_link: Scalars['String'];
  readonly image: Scalars['String'];
};

type Portfolio_ProjectCreateOrConnectWithoutAdminInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly create: Portfolio_ProjectCreateWithoutAdminInput;
};

type Portfolio_ProjectCreateManyAdminInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_ProjectCreateManyAdminInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_ProjectCreateManyAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_AdminCreateOrConnectWithoutAboutInput = {
  readonly where: Portfolio_AdminWhereUniqueInput;
  readonly create: Portfolio_AdminCreateWithoutAboutInput;
};

type Portfolio_AdminWhereUniqueInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
};

type Portfolio_AboutUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutAboutInput>;
};

type Portfolio_StringFieldUpdateOperationsInput = {
  readonly set: Maybe<Scalars['String']>;
};

type Portfolio_DateTimeFieldUpdateOperationsInput = {
  readonly set: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_AdminUpdateOneRequiredWithoutAboutInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutAboutInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutAboutInput>;
  readonly upsert: Maybe<Portfolio_AdminUpsertWithoutAboutInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
  readonly update: Maybe<Portfolio_AdminUpdateWithoutAboutInput>;
};

type Portfolio_AdminUpsertWithoutAboutInput = {
  readonly update: Portfolio_AdminUpdateWithoutAboutInput;
  readonly create: Portfolio_AdminCreateWithoutAboutInput;
};

type Portfolio_AdminUpdateWithoutAboutInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly email: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly fname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly lname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly linkedIn: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly whatsapp: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly instagram: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly heroImage: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly confirmed: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly password: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly resumes: Maybe<Portfolio_AdminUpdateresumesInput>;
  readonly messages: Maybe<Portfolio_MessageUpdateManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectUpdateManyWithoutAdminInput>;
};

type Portfolio_BoolFieldUpdateOperationsInput = {
  readonly set: Maybe<Scalars['Boolean']>;
};

type Portfolio_AdminUpdateresumesInput = {
  readonly set: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly push: Maybe<ReadonlyArray<Scalars['String']>>;
};

type Portfolio_MessageUpdateManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_MessageCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_MessageCreateOrConnectWithoutAdminInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_MessageUpsertWithWhereUniqueWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_MessageCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_MessageWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_MessageUpdateWithWhereUniqueWithoutAdminInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_MessageUpdateManyWithWhereWithoutAdminInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_MessageScalarWhereInput>>;
};

type Portfolio_MessageUpsertWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_MessageWhereUniqueInput;
  readonly update: Portfolio_MessageUpdateWithoutAdminInput;
  readonly create: Portfolio_MessageCreateWithoutAdminInput;
};

type Portfolio_MessageUpdateWithoutAdminInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly subject: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly from: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly read_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly answer_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly answeredAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly createdAd: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_MessageUpdateWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_MessageWhereUniqueInput;
  readonly data: Portfolio_MessageUpdateWithoutAdminInput;
};

type Portfolio_MessageUpdateManyWithWhereWithoutAdminInput = {
  readonly where: Portfolio_MessageScalarWhereInput;
  readonly data: Portfolio_MessageUpdateManyMutationInput;
};

type Portfolio_MessageScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_MessageScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_MessageScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_MessageScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly subject: Maybe<Portfolio_StringFilter>;
  readonly from: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly read_status: Maybe<Portfolio_BoolFilter>;
  readonly answer_status: Maybe<Portfolio_BoolFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly answeredAt: Maybe<Portfolio_DateTimeFilter>;
  readonly createdAd: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_MessageUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly subject: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly from: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly read_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly answer_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly answeredAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly createdAd: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_ProjectUpdateManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_ProjectCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_ProjectCreateOrConnectWithoutAdminInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_ProjectUpsertWithWhereUniqueWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_ProjectCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_ProjectWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_ProjectUpdateWithWhereUniqueWithoutAdminInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_ProjectUpdateManyWithWhereWithoutAdminInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_ProjectScalarWhereInput>>;
};

type Portfolio_ProjectUpsertWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly update: Portfolio_ProjectUpdateWithoutAdminInput;
  readonly create: Portfolio_ProjectCreateWithoutAdminInput;
};

type Portfolio_ProjectUpdateWithoutAdminInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly summary: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionUpdateManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchUpdateManyWithoutProjectInput>;
};

type Portfolio_TechCategoryUpdateManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_TechCategoryCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_TechCategoryCreateOrConnectWithoutProjectInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_TechCategoryUpsertWithWhereUniqueWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_TechCategoryCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_TechCategoryWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_TechCategoryUpdateWithWhereUniqueWithoutProjectInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_TechCategoryUpdateManyWithWhereWithoutProjectInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarWhereInput>>;
};

type Portfolio_TechCategoryUpsertWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_TechCategoryWhereUniqueInput;
  readonly update: Portfolio_TechCategoryUpdateWithoutProjectInput;
  readonly create: Portfolio_TechCategoryCreateWithoutProjectInput;
};

type Portfolio_TechCategoryUpdateWithoutProjectInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly techs: Maybe<Portfolio_TechUpdateManyWithoutTech_categoriesInput>;
};

type Portfolio_TechUpdateManyWithoutTech_categoriesInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_TechCreateWithoutTech_categoriesInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_TechCreateOrConnectWithoutTech_categoriesInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_TechUpsertWithWhereUniqueWithoutTech_categoriesInput>>;
  readonly createMany: Maybe<Portfolio_TechCreateManyTech_categoriesInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_TechWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_TechUpdateWithWhereUniqueWithoutTech_categoriesInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_TechUpdateManyWithWhereWithoutTech_categoriesInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_TechScalarWhereInput>>;
};

type Portfolio_TechUpsertWithWhereUniqueWithoutTech_categoriesInput = {
  readonly where: Portfolio_TechWhereUniqueInput;
  readonly update: Portfolio_TechUpdateWithoutTech_categoriesInput;
  readonly create: Portfolio_TechCreateWithoutTech_categoriesInput;
};

type Portfolio_TechUpdateWithoutTech_categoriesInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_TechUpdateWithWhereUniqueWithoutTech_categoriesInput = {
  readonly where: Portfolio_TechWhereUniqueInput;
  readonly data: Portfolio_TechUpdateWithoutTech_categoriesInput;
};

type Portfolio_TechUpdateManyWithWhereWithoutTech_categoriesInput = {
  readonly where: Portfolio_TechScalarWhereInput;
  readonly data: Portfolio_TechUpdateManyMutationInput;
};

type Portfolio_TechScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_TechScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_TechScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_TechScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly tech_category_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_TechUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_TechCategoryUpdateWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_TechCategoryWhereUniqueInput;
  readonly data: Portfolio_TechCategoryUpdateWithoutProjectInput;
};

type Portfolio_TechCategoryUpdateManyWithWhereWithoutProjectInput = {
  readonly where: Portfolio_TechCategoryScalarWhereInput;
  readonly data: Portfolio_TechCategoryUpdateManyMutationInput;
};

type Portfolio_TechCategoryScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_TechCategoryUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_QuestionUpdateManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_QuestionCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_QuestionCreateOrConnectWithoutProjectInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_QuestionUpsertWithWhereUniqueWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_QuestionCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_QuestionWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_QuestionUpdateWithWhereUniqueWithoutProjectInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_QuestionUpdateManyWithWhereWithoutProjectInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_QuestionScalarWhereInput>>;
};

type Portfolio_QuestionUpsertWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_QuestionWhereUniqueInput;
  readonly update: Portfolio_QuestionUpdateWithoutProjectInput;
  readonly create: Portfolio_QuestionCreateWithoutProjectInput;
};

type Portfolio_QuestionUpdateWithoutProjectInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly answer: Maybe<Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput>;
};

type Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput = {
  readonly create: Maybe<Portfolio_AnswerCreateWithoutQuestionInput>;
  readonly connectOrCreate: Maybe<Portfolio_AnswerCreateOrConnectWithoutQuestionInput>;
  readonly upsert: Maybe<Portfolio_AnswerUpsertWithoutQuestionInput>;
  readonly connect: Maybe<Portfolio_AnswerWhereUniqueInput>;
  readonly update: Maybe<Portfolio_AnswerUpdateWithoutQuestionInput>;
};

type Portfolio_AnswerUpsertWithoutQuestionInput = {
  readonly update: Portfolio_AnswerUpdateWithoutQuestionInput;
  readonly create: Portfolio_AnswerCreateWithoutQuestionInput;
};

type Portfolio_AnswerUpdateWithoutQuestionInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly answer: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_QuestionUpdateWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_QuestionWhereUniqueInput;
  readonly data: Portfolio_QuestionUpdateWithoutProjectInput;
};

type Portfolio_QuestionUpdateManyWithWhereWithoutProjectInput = {
  readonly where: Portfolio_QuestionScalarWhereInput;
  readonly data: Portfolio_QuestionUpdateManyMutationInput;
};

type Portfolio_QuestionScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_QuestionScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_QuestionScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_QuestionScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly question: Maybe<Portfolio_StringFilter>;
  readonly answer_id: Maybe<Portfolio_StringFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_QuestionUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_SketchUpdateManyWithoutProjectInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_SketchCreateWithoutProjectInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_SketchCreateOrConnectWithoutProjectInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_SketchUpsertWithWhereUniqueWithoutProjectInput>>;
  readonly createMany: Maybe<Portfolio_SketchCreateManyProjectInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_SketchWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_SketchUpdateWithWhereUniqueWithoutProjectInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_SketchUpdateManyWithWhereWithoutProjectInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_SketchScalarWhereInput>>;
};

type Portfolio_SketchUpsertWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_SketchWhereUniqueInput;
  readonly update: Portfolio_SketchUpdateWithoutProjectInput;
  readonly create: Portfolio_SketchCreateWithoutProjectInput;
};

type Portfolio_SketchUpdateWithoutProjectInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly description: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly summary: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly download_link: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_SketchUpdateWithWhereUniqueWithoutProjectInput = {
  readonly where: Portfolio_SketchWhereUniqueInput;
  readonly data: Portfolio_SketchUpdateWithoutProjectInput;
};

type Portfolio_SketchUpdateManyWithWhereWithoutProjectInput = {
  readonly where: Portfolio_SketchScalarWhereInput;
  readonly data: Portfolio_SketchUpdateManyMutationInput;
};

type Portfolio_SketchScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_SketchScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_SketchScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_SketchScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly title: Maybe<Portfolio_StringFilter>;
  readonly description: Maybe<Portfolio_StringFilter>;
  readonly summary: Maybe<Portfolio_StringFilter>;
  readonly download_link: Maybe<Portfolio_StringFilter>;
  readonly image: Maybe<Portfolio_StringFilter>;
  readonly project_id: Maybe<Portfolio_StringFilter>;
};

type Portfolio_SketchUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly description: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly summary: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly download_link: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
};

type Portfolio_ProjectUpdateWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly data: Portfolio_ProjectUpdateWithoutAdminInput;
};

type Portfolio_ProjectUpdateManyWithWhereWithoutAdminInput = {
  readonly where: Portfolio_ProjectScalarWhereInput;
  readonly data: Portfolio_ProjectUpdateManyMutationInput;
};

type Portfolio_ProjectScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_ProjectScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_ProjectScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_ProjectScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly name: Maybe<Portfolio_StringFilter>;
  readonly image: Maybe<Portfolio_StringFilter>;
  readonly type: Maybe<Portfolio_StringFilter>;
  readonly github_url: Maybe<Portfolio_StringFilter>;
  readonly app_url: Maybe<Portfolio_StringFilter>;
  readonly summary: Maybe<Portfolio_StringFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly createdAt: Maybe<Portfolio_DateTimeFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_ProjectUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly summary: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_AffectedRowsOutput = {
  readonly count: Scalars['Int'];
};

type Portfolio_AnswerCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly answer: Scalars['String'];
  readonly question: Maybe<Portfolio_QuestionCreateNestedOneWithoutAnswerInput>;
};

type Portfolio_QuestionCreateNestedOneWithoutAnswerInput = {
  readonly create: Maybe<Portfolio_QuestionCreateWithoutAnswerInput>;
  readonly connectOrCreate: Maybe<Portfolio_QuestionCreateOrConnectWithoutAnswerInput>;
  readonly connect: Maybe<Portfolio_QuestionWhereUniqueInput>;
};

type Portfolio_QuestionCreateWithoutAnswerInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly question: Scalars['String'];
  readonly project: Portfolio_ProjectCreateNestedOneWithoutQuestionsInput;
};

type Portfolio_ProjectCreateNestedOneWithoutQuestionsInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutQuestionsInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutQuestionsInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
};

type Portfolio_ProjectCreateWithoutQuestionsInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryCreateNestedManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchCreateNestedManyWithoutProjectInput>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
};

type Portfolio_AdminCreateNestedOneWithoutProjectsInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutProjectsInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutProjectsInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
};

type Portfolio_AdminCreateWithoutProjectsInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly password: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly resumes: Maybe<Portfolio_AdminCreateresumesInput>;
  readonly about: Maybe<Portfolio_AboutCreateNestedManyWithoutAdminInput>;
  readonly messages: Maybe<Portfolio_MessageCreateNestedManyWithoutAdminInput>;
};

type Portfolio_AboutCreateNestedManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_AboutCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_AboutCreateOrConnectWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_AboutCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
};

type Portfolio_AboutCreateWithoutAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_AboutCreateOrConnectWithoutAdminInput = {
  readonly where: Portfolio_AboutWhereUniqueInput;
  readonly create: Portfolio_AboutCreateWithoutAdminInput;
};

type Portfolio_AboutCreateManyAdminInputEnvelope = {
  readonly data: ReadonlyArray<Portfolio_AboutCreateManyAdminInput>;
  readonly skipDuplicates: Maybe<Scalars['Boolean']>;
};

type Portfolio_AboutCreateManyAdminInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
};

type Portfolio_AdminCreateOrConnectWithoutProjectsInput = {
  readonly where: Portfolio_AdminWhereUniqueInput;
  readonly create: Portfolio_AdminCreateWithoutProjectsInput;
};

type Portfolio_ProjectCreateOrConnectWithoutQuestionsInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly create: Portfolio_ProjectCreateWithoutQuestionsInput;
};

type Portfolio_QuestionCreateOrConnectWithoutAnswerInput = {
  readonly where: Portfolio_QuestionWhereUniqueInput;
  readonly create: Portfolio_QuestionCreateWithoutAnswerInput;
};

type Portfolio_AnswerUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly answer: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_QuestionUpdateOneWithoutAnswerInput>;
};

type Portfolio_QuestionUpdateOneWithoutAnswerInput = {
  readonly create: Maybe<Portfolio_QuestionCreateWithoutAnswerInput>;
  readonly connectOrCreate: Maybe<Portfolio_QuestionCreateOrConnectWithoutAnswerInput>;
  readonly upsert: Maybe<Portfolio_QuestionUpsertWithoutAnswerInput>;
  readonly connect: Maybe<Portfolio_QuestionWhereUniqueInput>;
  readonly disconnect: Maybe<Scalars['Boolean']>;
  readonly delete: Maybe<Scalars['Boolean']>;
  readonly update: Maybe<Portfolio_QuestionUpdateWithoutAnswerInput>;
};

type Portfolio_QuestionUpsertWithoutAnswerInput = {
  readonly update: Portfolio_QuestionUpdateWithoutAnswerInput;
  readonly create: Portfolio_QuestionCreateWithoutAnswerInput;
};

type Portfolio_QuestionUpdateWithoutAnswerInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput>;
};

type Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutQuestionsInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutQuestionsInput>;
  readonly upsert: Maybe<Portfolio_ProjectUpsertWithoutQuestionsInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
  readonly update: Maybe<Portfolio_ProjectUpdateWithoutQuestionsInput>;
};

type Portfolio_ProjectUpsertWithoutQuestionsInput = {
  readonly update: Portfolio_ProjectUpdateWithoutQuestionsInput;
  readonly create: Portfolio_ProjectCreateWithoutQuestionsInput;
};

type Portfolio_ProjectUpdateWithoutQuestionsInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly summary: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchUpdateManyWithoutProjectInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutProjectsInput>;
};

type Portfolio_AdminUpdateOneRequiredWithoutProjectsInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutProjectsInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutProjectsInput>;
  readonly upsert: Maybe<Portfolio_AdminUpsertWithoutProjectsInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
  readonly update: Maybe<Portfolio_AdminUpdateWithoutProjectsInput>;
};

type Portfolio_AdminUpsertWithoutProjectsInput = {
  readonly update: Portfolio_AdminUpdateWithoutProjectsInput;
  readonly create: Portfolio_AdminCreateWithoutProjectsInput;
};

type Portfolio_AdminUpdateWithoutProjectsInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly email: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly fname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly lname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly linkedIn: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly whatsapp: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly instagram: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly heroImage: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly confirmed: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly password: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly resumes: Maybe<Portfolio_AdminUpdateresumesInput>;
  readonly about: Maybe<Portfolio_AboutUpdateManyWithoutAdminInput>;
  readonly messages: Maybe<Portfolio_MessageUpdateManyWithoutAdminInput>;
};

type Portfolio_AboutUpdateManyWithoutAdminInput = {
  readonly create: Maybe<ReadonlyArray<Portfolio_AboutCreateWithoutAdminInput>>;
  readonly connectOrCreate: Maybe<ReadonlyArray<Portfolio_AboutCreateOrConnectWithoutAdminInput>>;
  readonly upsert: Maybe<ReadonlyArray<Portfolio_AboutUpsertWithWhereUniqueWithoutAdminInput>>;
  readonly createMany: Maybe<Portfolio_AboutCreateManyAdminInputEnvelope>;
  readonly connect: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
  readonly set: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
  readonly disconnect: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
  readonly delete: Maybe<ReadonlyArray<Portfolio_AboutWhereUniqueInput>>;
  readonly update: Maybe<ReadonlyArray<Portfolio_AboutUpdateWithWhereUniqueWithoutAdminInput>>;
  readonly updateMany: Maybe<ReadonlyArray<Portfolio_AboutUpdateManyWithWhereWithoutAdminInput>>;
  readonly deleteMany: Maybe<ReadonlyArray<Portfolio_AboutScalarWhereInput>>;
};

type Portfolio_AboutUpsertWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_AboutWhereUniqueInput;
  readonly update: Portfolio_AboutUpdateWithoutAdminInput;
  readonly create: Portfolio_AboutCreateWithoutAdminInput;
};

type Portfolio_AboutUpdateWithoutAdminInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_AboutUpdateWithWhereUniqueWithoutAdminInput = {
  readonly where: Portfolio_AboutWhereUniqueInput;
  readonly data: Portfolio_AboutUpdateWithoutAdminInput;
};

type Portfolio_AboutUpdateManyWithWhereWithoutAdminInput = {
  readonly where: Portfolio_AboutScalarWhereInput;
  readonly data: Portfolio_AboutUpdateManyMutationInput;
};

type Portfolio_AboutScalarWhereInput = {
  readonly AND: Maybe<ReadonlyArray<Portfolio_AboutScalarWhereInput>>;
  readonly OR: Maybe<ReadonlyArray<Portfolio_AboutScalarWhereInput>>;
  readonly NOT: Maybe<ReadonlyArray<Portfolio_AboutScalarWhereInput>>;
  readonly id: Maybe<Portfolio_StringFilter>;
  readonly title: Maybe<Portfolio_StringFilter>;
  readonly body: Maybe<Portfolio_StringFilter>;
  readonly admin_id: Maybe<Portfolio_StringFilter>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFilter>;
};

type Portfolio_AboutUpdateManyMutationInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
};

type Portfolio_MessageCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly subject: Scalars['String'];
  readonly from: Scalars['String'];
  readonly body: Scalars['String'];
  readonly read_status: Maybe<Scalars['Boolean']>;
  readonly answer_status: Maybe<Scalars['Boolean']>;
  readonly answeredAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly createdAd: Maybe<Scalars['Portfolio_DateTime']>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutMessagesInput;
};

type Portfolio_AdminCreateNestedOneWithoutMessagesInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutMessagesInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutMessagesInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
};

type Portfolio_AdminCreateWithoutMessagesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly password: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly resumes: Maybe<Portfolio_AdminCreateresumesInput>;
  readonly about: Maybe<Portfolio_AboutCreateNestedManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectCreateNestedManyWithoutAdminInput>;
};

type Portfolio_AdminCreateOrConnectWithoutMessagesInput = {
  readonly where: Portfolio_AdminWhereUniqueInput;
  readonly create: Portfolio_AdminCreateWithoutMessagesInput;
};

type Portfolio_MessageUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly subject: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly from: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly body: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly read_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly answer_status: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly answeredAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly createdAd: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutMessagesInput>;
};

type Portfolio_AdminUpdateOneRequiredWithoutMessagesInput = {
  readonly create: Maybe<Portfolio_AdminCreateWithoutMessagesInput>;
  readonly connectOrCreate: Maybe<Portfolio_AdminCreateOrConnectWithoutMessagesInput>;
  readonly upsert: Maybe<Portfolio_AdminUpsertWithoutMessagesInput>;
  readonly connect: Maybe<Portfolio_AdminWhereUniqueInput>;
  readonly update: Maybe<Portfolio_AdminUpdateWithoutMessagesInput>;
};

type Portfolio_AdminUpsertWithoutMessagesInput = {
  readonly update: Portfolio_AdminUpdateWithoutMessagesInput;
  readonly create: Portfolio_AdminCreateWithoutMessagesInput;
};

type Portfolio_AdminUpdateWithoutMessagesInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly email: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly fname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly lname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly linkedIn: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly whatsapp: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly instagram: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly heroImage: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly confirmed: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly password: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly resumes: Maybe<Portfolio_AdminUpdateresumesInput>;
  readonly about: Maybe<Portfolio_AboutUpdateManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectUpdateManyWithoutAdminInput>;
};

type Portfolio_ProjectCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryCreateNestedManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionCreateNestedManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchCreateNestedManyWithoutProjectInput>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
};

type Portfolio_ProjectUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly summary: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionUpdateManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchUpdateManyWithoutProjectInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutProjectsInput>;
};

type Portfolio_QuestionCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly question: Scalars['String'];
  readonly answer: Portfolio_AnswerCreateNestedOneWithoutQuestionInput;
  readonly project: Portfolio_ProjectCreateNestedOneWithoutQuestionsInput;
};

type Portfolio_QuestionUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly question: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly answer: Maybe<Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput>;
};

type Portfolio_SketchCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly description: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly download_link: Scalars['String'];
  readonly image: Scalars['String'];
  readonly project: Portfolio_ProjectCreateNestedOneWithoutSketchesInput;
};

type Portfolio_ProjectCreateNestedOneWithoutSketchesInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutSketchesInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutSketchesInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
};

type Portfolio_ProjectCreateWithoutSketchesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryCreateNestedManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionCreateNestedManyWithoutProjectInput>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
};

type Portfolio_ProjectCreateOrConnectWithoutSketchesInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly create: Portfolio_ProjectCreateWithoutSketchesInput;
};

type Portfolio_SketchUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly title: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly description: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly summary: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly download_link: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutSketchesInput>;
};

type Portfolio_ProjectUpdateOneRequiredWithoutSketchesInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutSketchesInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutSketchesInput>;
  readonly upsert: Maybe<Portfolio_ProjectUpsertWithoutSketchesInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
  readonly update: Maybe<Portfolio_ProjectUpdateWithoutSketchesInput>;
};

type Portfolio_ProjectUpsertWithoutSketchesInput = {
  readonly update: Portfolio_ProjectUpdateWithoutSketchesInput;
  readonly create: Portfolio_ProjectCreateWithoutSketchesInput;
};

type Portfolio_ProjectUpdateWithoutSketchesInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly summary: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateManyWithoutProjectInput>;
  readonly questions: Maybe<Portfolio_QuestionUpdateManyWithoutProjectInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutProjectsInput>;
};

type Portfolio_TechCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly tech_categories: Portfolio_TechCategoryCreateNestedOneWithoutTechsInput;
};

type Portfolio_TechCategoryCreateNestedOneWithoutTechsInput = {
  readonly create: Maybe<Portfolio_TechCategoryCreateWithoutTechsInput>;
  readonly connectOrCreate: Maybe<Portfolio_TechCategoryCreateOrConnectWithoutTechsInput>;
  readonly connect: Maybe<Portfolio_TechCategoryWhereUniqueInput>;
};

type Portfolio_TechCategoryCreateWithoutTechsInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly project: Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput;
};

type Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutTech_categoriesInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
};

type Portfolio_ProjectCreateWithoutTech_categoriesInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly image: Scalars['String'];
  readonly type: Scalars['String'];
  readonly github_url: Scalars['String'];
  readonly app_url: Scalars['String'];
  readonly summary: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly questions: Maybe<Portfolio_QuestionCreateNestedManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchCreateNestedManyWithoutProjectInput>;
  readonly admin: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
};

type Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput = {
  readonly where: Portfolio_ProjectWhereUniqueInput;
  readonly create: Portfolio_ProjectCreateWithoutTech_categoriesInput;
};

type Portfolio_TechCategoryCreateOrConnectWithoutTechsInput = {
  readonly where: Portfolio_TechCategoryWhereUniqueInput;
  readonly create: Portfolio_TechCategoryCreateWithoutTechsInput;
};

type Portfolio_TechUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly tech_categories: Maybe<Portfolio_TechCategoryUpdateOneRequiredWithoutTechsInput>;
};

type Portfolio_TechCategoryUpdateOneRequiredWithoutTechsInput = {
  readonly create: Maybe<Portfolio_TechCategoryCreateWithoutTechsInput>;
  readonly connectOrCreate: Maybe<Portfolio_TechCategoryCreateOrConnectWithoutTechsInput>;
  readonly upsert: Maybe<Portfolio_TechCategoryUpsertWithoutTechsInput>;
  readonly connect: Maybe<Portfolio_TechCategoryWhereUniqueInput>;
  readonly update: Maybe<Portfolio_TechCategoryUpdateWithoutTechsInput>;
};

type Portfolio_TechCategoryUpsertWithoutTechsInput = {
  readonly update: Portfolio_TechCategoryUpdateWithoutTechsInput;
  readonly create: Portfolio_TechCategoryCreateWithoutTechsInput;
};

type Portfolio_TechCategoryUpdateWithoutTechsInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput>;
};

type Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput = {
  readonly create: Maybe<Portfolio_ProjectCreateWithoutTech_categoriesInput>;
  readonly connectOrCreate: Maybe<Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput>;
  readonly upsert: Maybe<Portfolio_ProjectUpsertWithoutTech_categoriesInput>;
  readonly connect: Maybe<Portfolio_ProjectWhereUniqueInput>;
  readonly update: Maybe<Portfolio_ProjectUpdateWithoutTech_categoriesInput>;
};

type Portfolio_ProjectUpsertWithoutTech_categoriesInput = {
  readonly update: Portfolio_ProjectUpdateWithoutTech_categoriesInput;
  readonly create: Portfolio_ProjectCreateWithoutTech_categoriesInput;
};

type Portfolio_ProjectUpdateWithoutTech_categoriesInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly image: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly type: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly app_url: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly summary: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly questions: Maybe<Portfolio_QuestionUpdateManyWithoutProjectInput>;
  readonly sketches: Maybe<Portfolio_SketchUpdateManyWithoutProjectInput>;
  readonly admin: Maybe<Portfolio_AdminUpdateOneRequiredWithoutProjectsInput>;
};

type Portfolio_TechCategoryCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly techs: Maybe<Portfolio_TechCreateNestedManyWithoutTech_categoriesInput>;
  readonly project: Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput;
};

type Portfolio_TechCategoryUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly name: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly techs: Maybe<Portfolio_TechUpdateManyWithoutTech_categoriesInput>;
  readonly project: Maybe<Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput>;
};

type Portfolio_LoginReturnType = {
  readonly token: Maybe<Scalars['String']>;
};

type Portfolio_LoginInputType = {
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
};

type Portfolio_AdminCreateInput = {
  readonly id: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly fname: Scalars['String'];
  readonly lname: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly whatsapp: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly github: Scalars['String'];
  readonly heroImage: Scalars['String'];
  readonly confirmed: Maybe<Scalars['Boolean']>;
  readonly password: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly updatedAt: Maybe<Scalars['Portfolio_DateTime']>;
  readonly resumes: Maybe<Portfolio_AdminCreateresumesInput>;
  readonly about: Maybe<Portfolio_AboutCreateNestedManyWithoutAdminInput>;
  readonly messages: Maybe<Portfolio_MessageCreateNestedManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectCreateNestedManyWithoutAdminInput>;
};

type Portfolio_AdminUpdateInput = {
  readonly id: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly email: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly fname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly lname: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly linkedIn: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly whatsapp: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly instagram: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly github: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly heroImage: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly confirmed: Maybe<Portfolio_BoolFieldUpdateOperationsInput>;
  readonly password: Maybe<Portfolio_StringFieldUpdateOperationsInput>;
  readonly createdAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly updatedAt: Maybe<Portfolio_DateTimeFieldUpdateOperationsInput>;
  readonly resumes: Maybe<Portfolio_AdminUpdateresumesInput>;
  readonly about: Maybe<Portfolio_AboutUpdateManyWithoutAdminInput>;
  readonly messages: Maybe<Portfolio_MessageUpdateManyWithoutAdminInput>;
  readonly projects: Maybe<Portfolio_ProjectUpdateManyWithoutAdminInput>;
};


type Portfolio = {
  readonly about: Maybe<Portfolio_About>;
  readonly abouts: ReadonlyArray<Portfolio_About>;
  readonly answer: Maybe<Portfolio_Answer>;
  readonly answers: ReadonlyArray<Portfolio_Answer>;
  readonly message: Maybe<Portfolio_Message>;
  readonly messages: ReadonlyArray<Portfolio_Message>;
  readonly project: Maybe<Portfolio_Project>;
  readonly projects: ReadonlyArray<Portfolio_Project>;
  readonly question: Maybe<Portfolio_Question>;
  readonly questions: ReadonlyArray<Portfolio_Question>;
  readonly sketch: Maybe<Portfolio_Sketch>;
  readonly sketches: ReadonlyArray<Portfolio_Sketch>;
  readonly tech: Maybe<Portfolio_Tech>;
  readonly teches: ReadonlyArray<Portfolio_Tech>;
  readonly techCategory: Maybe<Portfolio_TechCategory>;
  readonly techCategories: ReadonlyArray<Portfolio_TechCategory>;
  readonly isThereAnAdmin: Scalars['Boolean'];
  readonly me: Maybe<Portfolio_Admin>;
  readonly getAdmin: Portfolio_Admin;
  readonly getNumOfAdmins: Maybe<Scalars['Int']>;
};


type Portfolio_aboutArgs = {
  where: Portfolio_AboutWhereUniqueInput;
};


type Portfolio_aboutsArgs = {
  where: Maybe<Portfolio_AboutWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_AboutOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_AboutWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_AboutScalarFieldEnum>>;
};


type Portfolio_answerArgs = {
  where: Portfolio_AnswerWhereUniqueInput;
};


type Portfolio_answersArgs = {
  where: Maybe<Portfolio_AnswerWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_AnswerOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_AnswerWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_AnswerScalarFieldEnum>>;
};


type Portfolio_messageArgs = {
  where: Portfolio_MessageWhereUniqueInput;
};


type Portfolio_messagesArgs = {
  where: Maybe<Portfolio_MessageWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_MessageOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_MessageWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_MessageScalarFieldEnum>>;
};


type Portfolio_projectArgs = {
  where: Portfolio_ProjectWhereUniqueInput;
};


type Portfolio_projectsArgs = {
  where: Maybe<Portfolio_ProjectWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_ProjectOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_ProjectWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_ProjectScalarFieldEnum>>;
};


type Portfolio_questionArgs = {
  where: Portfolio_QuestionWhereUniqueInput;
};


type Portfolio_questionsArgs = {
  where: Maybe<Portfolio_QuestionWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_QuestionOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_QuestionWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_QuestionScalarFieldEnum>>;
};


type Portfolio_sketchArgs = {
  where: Portfolio_SketchWhereUniqueInput;
};


type Portfolio_sketchesArgs = {
  where: Maybe<Portfolio_SketchWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_SketchOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_SketchWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_SketchScalarFieldEnum>>;
};


type Portfolio_techArgs = {
  where: Portfolio_TechWhereUniqueInput;
};


type Portfolio_techesArgs = {
  where: Maybe<Portfolio_TechWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_TechOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_TechWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_TechScalarFieldEnum>>;
};


type Portfolio_techCategoryArgs = {
  where: Portfolio_TechCategoryWhereUniqueInput;
};


type Portfolio_techCategoriesArgs = {
  where: Maybe<Portfolio_TechCategoryWhereInput>;
  orderBy: Maybe<ReadonlyArray<Portfolio_TechCategoryOrderByWithRelationInput>>;
  cursor: Maybe<Portfolio_TechCategoryWhereUniqueInput>;
  take: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
  distinct: Maybe<ReadonlyArray<Portfolio_TechCategoryScalarFieldEnum>>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly graphQlSource: Maybe<GraphQLSource>;
  readonly allGraphQlSource: GraphQLSourceConnection;
  readonly portfolio: Portfolio;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphQlSourceArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  typeName: Maybe<StringQueryOperatorInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
};


type Query_allGraphQlSourceArgs = {
  filter: Maybe<GraphQLSourceFilterInput>;
  sort: Maybe<GraphQLSourceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.author'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly project: Maybe<SitePageContextProjectFilterInput>;
};

type SitePageContextProjectFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly autoFix: Maybe<BooleanQueryOperatorInput>;
  readonly language: Maybe<StringQueryOperatorInput>;
  readonly includeResolvers: Maybe<BooleanQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly specialChars: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly _xsrcxxxgeneratedxxxgatsbyxschemaxgraphql: Maybe<BooleanQueryOperatorInput>;
  readonly _xsrcxxxgeneratedxxxgatsbyxintrospectionxjson: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.project.id'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.autoFix'
  | 'pluginCreator.pluginOptions.language'
  | 'pluginCreator.pluginOptions.includeResolvers'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxschemaxgraphql'
  | 'pluginCreator.pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxintrospectionxjson'
  | 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginCreator.pluginOptions.specialChars'
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.typeName'
  | 'pluginCreator.pluginOptions.fieldName'
  | 'pluginCreator.pluginOptions.url'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.autoFix'
  | 'pluginOptions.language'
  | 'pluginOptions.includeResolvers'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxschemaxgraphql'
  | 'pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxintrospectionxjson'
  | 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginOptions.specialChars'
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.typeName'
  | 'pluginOptions.fieldName'
  | 'pluginOptions.url'
  | 'pluginOptions.pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GraphQLSourceConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
};


type GraphQLSourceConnection_distinctArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_maxArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_minArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_sumArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphQLSourceFieldsEnum;
};

type GraphQLSourceEdge = {
  readonly next: Maybe<GraphQLSource>;
  readonly node: GraphQLSource;
  readonly previous: Maybe<GraphQLSource>;
};

type GraphQLSourceFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'typeName'
  | 'fieldName';

type GraphQLSourceGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphQLSourceFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
};

type GraphQLSourceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphQLSourceFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrccomponentsSeoTsx3000541721QueryVariables = Exact<{ [key: string]: never; }>;


type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrccomponentsSeoTsx3000541721Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrcpagesindexTsx3888931460QueryVariables = Exact<{ [key: string]: never; }>;


type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrcpagesindexTsx3888931460Query = { readonly portfolio: { readonly projects: ReadonlyArray<(
      Pick<Portfolio_Project, 'name' | 'image' | 'id' | 'github_url' | 'createdAt' | 'app_url' | 'summary' | 'updatedAt' | 'type'>
      & { readonly tech_categories: ReadonlyArray<(
        Pick<Portfolio_TechCategory, 'name' | 'id'>
        & { readonly techs: ReadonlyArray<Pick<Portfolio_Tech, 'name' | 'id'>> }
      )> }
    )>, readonly me: Maybe<Pick<Portfolio_Admin, 'email' | 'github' | 'heroImage' | 'instagram' | 'linkedIn' | 'lname' | 'resumes' | 'whatsapp'>> } };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrcpagesprojectsTsx666501818QueryVariables = Exact<{ [key: string]: never; }>;


type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrcpagesprojectsTsx666501818Query = { readonly portfolio: { readonly projects: ReadonlyArray<(
      Pick<Portfolio_Project, 'id' | 'image' | 'app_url' | 'type' | 'name' | 'github_url' | 'summary'>
      & { readonly tech_categories: ReadonlyArray<(
        Pick<Portfolio_TechCategory, 'id' | 'name'>
        & { readonly techs: ReadonlyArray<Pick<Portfolio_Tech, 'id' | 'name'>> }
      )> }
    )> } };

type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrccomponentsDashboardDashHeroTsx3862925404QueryVariables = Exact<{ [key: string]: never; }>;


type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrccomponentsDashboardDashHeroTsx3862925404Query = { readonly f1: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly f2: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type ProjectImageQueryVariables = Exact<{
  image: Maybe<Scalars['String']>;
}>;


type ProjectImageQuery = { readonly file: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> };

type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrcpagesaboutMeTsx814646772QueryVariables = Exact<{ [key: string]: never; }>;


type runmediaamirmuha86E6E47Be6E46CbdProjectsApplicationsportfolioclientsrcpagesaboutMeTsx814646772Query = { readonly portfolio: { readonly abouts: ReadonlyArray<Pick<Portfolio_About, 'body' | 'id' | 'title'>> } };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  File: ResolverTypeWrapper<File>;
  Node: ResolversTypes['File'] | ResolversTypes['Directory'] | ResolversTypes['Site'] | ResolversTypes['SiteFunction'] | ResolversTypes['SitePage'] | ResolversTypes['ImageSharp'] | ResolversTypes['SitePlugin'] | ResolversTypes['SiteBuildMetadata'] | ResolversTypes['GraphQLSource'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Internal: ResolverTypeWrapper<Internal>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Directory: ResolverTypeWrapper<Directory>;
  Site: ResolverTypeWrapper<Site>;
  SiteSiteMetadata: ResolverTypeWrapper<SiteSiteMetadata>;
  SiteFunction: ResolverTypeWrapper<SiteFunction>;
  SitePage: ResolverTypeWrapper<SitePage>;
  SitePageContext: ResolverTypeWrapper<SitePageContext>;
  SitePageContextProject: ResolverTypeWrapper<SitePageContextProject>;
  ImageFormat: ImageFormat;
  ImageFit: ImageFit;
  ImageLayout: ImageLayout;
  ImageCropFocus: ImageCropFocus;
  DuotoneGradient: DuotoneGradient;
  PotraceTurnPolicy: PotraceTurnPolicy;
  Potrace: Potrace;
  ImageSharp: ResolverTypeWrapper<ImageSharp>;
  ImageSharpFixed: ResolverTypeWrapper<ImageSharpFixed>;
  ImageSharpFluid: ResolverTypeWrapper<ImageSharpFluid>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  ImagePlaceholder: ImagePlaceholder;
  BlurredOptions: BlurredOptions;
  JPGOptions: JPGOptions;
  PNGOptions: PNGOptions;
  WebPOptions: WebPOptions;
  AVIFOptions: AVIFOptions;
  TransformOptions: TransformOptions;
  ImageSharpOriginal: ResolverTypeWrapper<ImageSharpOriginal>;
  ImageSharpResize: ResolverTypeWrapper<ImageSharpResize>;
  SitePlugin: ResolverTypeWrapper<SitePlugin>;
  SitePluginPluginOptions: ResolverTypeWrapper<SitePluginPluginOptions>;
  SitePluginPluginOptionsEmitSchema: ResolverTypeWrapper<SitePluginPluginOptionsEmitSchema>;
  SitePluginPluginOptionsEmitPluginDocuments: ResolverTypeWrapper<SitePluginPluginOptionsEmitPluginDocuments>;
  SitePluginPackageJson: ResolverTypeWrapper<SitePluginPackageJson>;
  SitePluginPackageJsonDependencies: ResolverTypeWrapper<SitePluginPackageJsonDependencies>;
  SitePluginPackageJsonDevDependencies: ResolverTypeWrapper<SitePluginPackageJsonDevDependencies>;
  SitePluginPackageJsonPeerDependencies: ResolverTypeWrapper<SitePluginPackageJsonPeerDependencies>;
  SiteBuildMetadata: ResolverTypeWrapper<SiteBuildMetadata>;
  GraphQLSource: ResolverTypeWrapper<GraphQLSource>;
  Portfolio_About: ResolverTypeWrapper<Portfolio_About>;
  Portfolio_DateTime: ResolverTypeWrapper<Scalars['Portfolio_DateTime']>;
  Portfolio_Admin: ResolverTypeWrapper<Portfolio_Admin>;
  Portfolio_AdminCount: ResolverTypeWrapper<Portfolio_AdminCount>;
  Portfolio_AboutWhereUniqueInput: Portfolio_AboutWhereUniqueInput;
  Portfolio_AboutWhereInput: Portfolio_AboutWhereInput;
  Portfolio_StringFilter: Portfolio_StringFilter;
  Portfolio_QueryMode: Portfolio_QueryMode;
  Portfolio_NestedStringFilter: Portfolio_NestedStringFilter;
  Portfolio_AdminRelationFilter: Portfolio_AdminRelationFilter;
  Portfolio_AdminWhereInput: Portfolio_AdminWhereInput;
  Portfolio_StringNullableListFilter: Portfolio_StringNullableListFilter;
  Portfolio_BoolFilter: Portfolio_BoolFilter;
  Portfolio_NestedBoolFilter: Portfolio_NestedBoolFilter;
  Portfolio_AboutListRelationFilter: Portfolio_AboutListRelationFilter;
  Portfolio_MessageListRelationFilter: Portfolio_MessageListRelationFilter;
  Portfolio_MessageWhereInput: Portfolio_MessageWhereInput;
  Portfolio_DateTimeFilter: Portfolio_DateTimeFilter;
  Portfolio_NestedDateTimeFilter: Portfolio_NestedDateTimeFilter;
  Portfolio_ProjectListRelationFilter: Portfolio_ProjectListRelationFilter;
  Portfolio_ProjectWhereInput: Portfolio_ProjectWhereInput;
  Portfolio_TechCategoryListRelationFilter: Portfolio_TechCategoryListRelationFilter;
  Portfolio_TechCategoryWhereInput: Portfolio_TechCategoryWhereInput;
  Portfolio_TechListRelationFilter: Portfolio_TechListRelationFilter;
  Portfolio_TechWhereInput: Portfolio_TechWhereInput;
  Portfolio_TechCategoryRelationFilter: Portfolio_TechCategoryRelationFilter;
  Portfolio_ProjectRelationFilter: Portfolio_ProjectRelationFilter;
  Portfolio_QuestionListRelationFilter: Portfolio_QuestionListRelationFilter;
  Portfolio_QuestionWhereInput: Portfolio_QuestionWhereInput;
  Portfolio_AnswerRelationFilter: Portfolio_AnswerRelationFilter;
  Portfolio_AnswerWhereInput: Portfolio_AnswerWhereInput;
  Portfolio_QuestionRelationFilter: Portfolio_QuestionRelationFilter;
  Portfolio_SketchListRelationFilter: Portfolio_SketchListRelationFilter;
  Portfolio_SketchWhereInput: Portfolio_SketchWhereInput;
  Portfolio_AboutOrderByWithRelationInput: Portfolio_AboutOrderByWithRelationInput;
  Portfolio_SortOrder: Portfolio_SortOrder;
  Portfolio_AdminOrderByWithRelationInput: Portfolio_AdminOrderByWithRelationInput;
  Portfolio_AboutOrderByRelationAggregateInput: Portfolio_AboutOrderByRelationAggregateInput;
  Portfolio_MessageOrderByRelationAggregateInput: Portfolio_MessageOrderByRelationAggregateInput;
  Portfolio_ProjectOrderByRelationAggregateInput: Portfolio_ProjectOrderByRelationAggregateInput;
  Portfolio_AboutScalarFieldEnum: Portfolio_AboutScalarFieldEnum;
  Portfolio_Answer: ResolverTypeWrapper<Portfolio_Answer>;
  Portfolio_Question: ResolverTypeWrapper<Portfolio_Question>;
  Portfolio_Project: ResolverTypeWrapper<Portfolio_Project>;
  Portfolio_ProjectCount: ResolverTypeWrapper<Portfolio_ProjectCount>;
  Portfolio_TechCategory: ResolverTypeWrapper<Portfolio_TechCategory>;
  Portfolio_TechCategoryCount: ResolverTypeWrapper<Portfolio_TechCategoryCount>;
  Portfolio_Tech: ResolverTypeWrapper<Portfolio_Tech>;
  Portfolio_TechOrderByWithRelationInput: Portfolio_TechOrderByWithRelationInput;
  Portfolio_TechCategoryOrderByWithRelationInput: Portfolio_TechCategoryOrderByWithRelationInput;
  Portfolio_TechOrderByRelationAggregateInput: Portfolio_TechOrderByRelationAggregateInput;
  Portfolio_ProjectOrderByWithRelationInput: Portfolio_ProjectOrderByWithRelationInput;
  Portfolio_TechCategoryOrderByRelationAggregateInput: Portfolio_TechCategoryOrderByRelationAggregateInput;
  Portfolio_QuestionOrderByRelationAggregateInput: Portfolio_QuestionOrderByRelationAggregateInput;
  Portfolio_SketchOrderByRelationAggregateInput: Portfolio_SketchOrderByRelationAggregateInput;
  Portfolio_TechWhereUniqueInput: Portfolio_TechWhereUniqueInput;
  Portfolio_TechScalarFieldEnum: Portfolio_TechScalarFieldEnum;
  Portfolio_TechCategoryWhereUniqueInput: Portfolio_TechCategoryWhereUniqueInput;
  Portfolio_TechCategoryScalarFieldEnum: Portfolio_TechCategoryScalarFieldEnum;
  Portfolio_QuestionOrderByWithRelationInput: Portfolio_QuestionOrderByWithRelationInput;
  Portfolio_AnswerOrderByWithRelationInput: Portfolio_AnswerOrderByWithRelationInput;
  Portfolio_QuestionWhereUniqueInput: Portfolio_QuestionWhereUniqueInput;
  Portfolio_QuestionScalarFieldEnum: Portfolio_QuestionScalarFieldEnum;
  Portfolio_Sketch: ResolverTypeWrapper<Portfolio_Sketch>;
  Portfolio_SketchOrderByWithRelationInput: Portfolio_SketchOrderByWithRelationInput;
  Portfolio_SketchWhereUniqueInput: Portfolio_SketchWhereUniqueInput;
  Portfolio_SketchScalarFieldEnum: Portfolio_SketchScalarFieldEnum;
  Portfolio_AnswerWhereUniqueInput: Portfolio_AnswerWhereUniqueInput;
  Portfolio_AnswerScalarFieldEnum: Portfolio_AnswerScalarFieldEnum;
  Portfolio_Message: ResolverTypeWrapper<Portfolio_Message>;
  Portfolio_MessageWhereUniqueInput: Portfolio_MessageWhereUniqueInput;
  Portfolio_MessageOrderByWithRelationInput: Portfolio_MessageOrderByWithRelationInput;
  Portfolio_MessageScalarFieldEnum: Portfolio_MessageScalarFieldEnum;
  Portfolio_ProjectWhereUniqueInput: Portfolio_ProjectWhereUniqueInput;
  Portfolio_ProjectScalarFieldEnum: Portfolio_ProjectScalarFieldEnum;
  Portfolio_AboutCreateInput: Portfolio_AboutCreateInput;
  Portfolio_AdminCreateNestedOneWithoutAboutInput: Portfolio_AdminCreateNestedOneWithoutAboutInput;
  Portfolio_AdminCreateWithoutAboutInput: Portfolio_AdminCreateWithoutAboutInput;
  Portfolio_AdminCreateresumesInput: Portfolio_AdminCreateresumesInput;
  Portfolio_MessageCreateNestedManyWithoutAdminInput: Portfolio_MessageCreateNestedManyWithoutAdminInput;
  Portfolio_MessageCreateWithoutAdminInput: Portfolio_MessageCreateWithoutAdminInput;
  Portfolio_MessageCreateOrConnectWithoutAdminInput: Portfolio_MessageCreateOrConnectWithoutAdminInput;
  Portfolio_MessageCreateManyAdminInputEnvelope: Portfolio_MessageCreateManyAdminInputEnvelope;
  Portfolio_MessageCreateManyAdminInput: Portfolio_MessageCreateManyAdminInput;
  Portfolio_ProjectCreateNestedManyWithoutAdminInput: Portfolio_ProjectCreateNestedManyWithoutAdminInput;
  Portfolio_ProjectCreateWithoutAdminInput: Portfolio_ProjectCreateWithoutAdminInput;
  Portfolio_TechCategoryCreateNestedManyWithoutProjectInput: Portfolio_TechCategoryCreateNestedManyWithoutProjectInput;
  Portfolio_TechCategoryCreateWithoutProjectInput: Portfolio_TechCategoryCreateWithoutProjectInput;
  Portfolio_TechCreateNestedManyWithoutTech_categoriesInput: Portfolio_TechCreateNestedManyWithoutTech_categoriesInput;
  Portfolio_TechCreateWithoutTech_categoriesInput: Portfolio_TechCreateWithoutTech_categoriesInput;
  Portfolio_TechCreateOrConnectWithoutTech_categoriesInput: Portfolio_TechCreateOrConnectWithoutTech_categoriesInput;
  Portfolio_TechCreateManyTech_categoriesInputEnvelope: Portfolio_TechCreateManyTech_categoriesInputEnvelope;
  Portfolio_TechCreateManyTech_categoriesInput: Portfolio_TechCreateManyTech_categoriesInput;
  Portfolio_TechCategoryCreateOrConnectWithoutProjectInput: Portfolio_TechCategoryCreateOrConnectWithoutProjectInput;
  Portfolio_TechCategoryCreateManyProjectInputEnvelope: Portfolio_TechCategoryCreateManyProjectInputEnvelope;
  Portfolio_TechCategoryCreateManyProjectInput: Portfolio_TechCategoryCreateManyProjectInput;
  Portfolio_QuestionCreateNestedManyWithoutProjectInput: Portfolio_QuestionCreateNestedManyWithoutProjectInput;
  Portfolio_QuestionCreateWithoutProjectInput: Portfolio_QuestionCreateWithoutProjectInput;
  Portfolio_AnswerCreateNestedOneWithoutQuestionInput: Portfolio_AnswerCreateNestedOneWithoutQuestionInput;
  Portfolio_AnswerCreateWithoutQuestionInput: Portfolio_AnswerCreateWithoutQuestionInput;
  Portfolio_AnswerCreateOrConnectWithoutQuestionInput: Portfolio_AnswerCreateOrConnectWithoutQuestionInput;
  Portfolio_QuestionCreateOrConnectWithoutProjectInput: Portfolio_QuestionCreateOrConnectWithoutProjectInput;
  Portfolio_QuestionCreateManyProjectInputEnvelope: Portfolio_QuestionCreateManyProjectInputEnvelope;
  Portfolio_QuestionCreateManyProjectInput: Portfolio_QuestionCreateManyProjectInput;
  Portfolio_SketchCreateNestedManyWithoutProjectInput: Portfolio_SketchCreateNestedManyWithoutProjectInput;
  Portfolio_SketchCreateWithoutProjectInput: Portfolio_SketchCreateWithoutProjectInput;
  Portfolio_SketchCreateOrConnectWithoutProjectInput: Portfolio_SketchCreateOrConnectWithoutProjectInput;
  Portfolio_SketchCreateManyProjectInputEnvelope: Portfolio_SketchCreateManyProjectInputEnvelope;
  Portfolio_SketchCreateManyProjectInput: Portfolio_SketchCreateManyProjectInput;
  Portfolio_ProjectCreateOrConnectWithoutAdminInput: Portfolio_ProjectCreateOrConnectWithoutAdminInput;
  Portfolio_ProjectCreateManyAdminInputEnvelope: Portfolio_ProjectCreateManyAdminInputEnvelope;
  Portfolio_ProjectCreateManyAdminInput: Portfolio_ProjectCreateManyAdminInput;
  Portfolio_AdminCreateOrConnectWithoutAboutInput: Portfolio_AdminCreateOrConnectWithoutAboutInput;
  Portfolio_AdminWhereUniqueInput: Portfolio_AdminWhereUniqueInput;
  Portfolio_AboutUpdateInput: Portfolio_AboutUpdateInput;
  Portfolio_StringFieldUpdateOperationsInput: Portfolio_StringFieldUpdateOperationsInput;
  Portfolio_DateTimeFieldUpdateOperationsInput: Portfolio_DateTimeFieldUpdateOperationsInput;
  Portfolio_AdminUpdateOneRequiredWithoutAboutInput: Portfolio_AdminUpdateOneRequiredWithoutAboutInput;
  Portfolio_AdminUpsertWithoutAboutInput: Portfolio_AdminUpsertWithoutAboutInput;
  Portfolio_AdminUpdateWithoutAboutInput: Portfolio_AdminUpdateWithoutAboutInput;
  Portfolio_BoolFieldUpdateOperationsInput: Portfolio_BoolFieldUpdateOperationsInput;
  Portfolio_AdminUpdateresumesInput: Portfolio_AdminUpdateresumesInput;
  Portfolio_MessageUpdateManyWithoutAdminInput: Portfolio_MessageUpdateManyWithoutAdminInput;
  Portfolio_MessageUpsertWithWhereUniqueWithoutAdminInput: Portfolio_MessageUpsertWithWhereUniqueWithoutAdminInput;
  Portfolio_MessageUpdateWithoutAdminInput: Portfolio_MessageUpdateWithoutAdminInput;
  Portfolio_MessageUpdateWithWhereUniqueWithoutAdminInput: Portfolio_MessageUpdateWithWhereUniqueWithoutAdminInput;
  Portfolio_MessageUpdateManyWithWhereWithoutAdminInput: Portfolio_MessageUpdateManyWithWhereWithoutAdminInput;
  Portfolio_MessageScalarWhereInput: Portfolio_MessageScalarWhereInput;
  Portfolio_MessageUpdateManyMutationInput: Portfolio_MessageUpdateManyMutationInput;
  Portfolio_ProjectUpdateManyWithoutAdminInput: Portfolio_ProjectUpdateManyWithoutAdminInput;
  Portfolio_ProjectUpsertWithWhereUniqueWithoutAdminInput: Portfolio_ProjectUpsertWithWhereUniqueWithoutAdminInput;
  Portfolio_ProjectUpdateWithoutAdminInput: Portfolio_ProjectUpdateWithoutAdminInput;
  Portfolio_TechCategoryUpdateManyWithoutProjectInput: Portfolio_TechCategoryUpdateManyWithoutProjectInput;
  Portfolio_TechCategoryUpsertWithWhereUniqueWithoutProjectInput: Portfolio_TechCategoryUpsertWithWhereUniqueWithoutProjectInput;
  Portfolio_TechCategoryUpdateWithoutProjectInput: Portfolio_TechCategoryUpdateWithoutProjectInput;
  Portfolio_TechUpdateManyWithoutTech_categoriesInput: Portfolio_TechUpdateManyWithoutTech_categoriesInput;
  Portfolio_TechUpsertWithWhereUniqueWithoutTech_categoriesInput: Portfolio_TechUpsertWithWhereUniqueWithoutTech_categoriesInput;
  Portfolio_TechUpdateWithoutTech_categoriesInput: Portfolio_TechUpdateWithoutTech_categoriesInput;
  Portfolio_TechUpdateWithWhereUniqueWithoutTech_categoriesInput: Portfolio_TechUpdateWithWhereUniqueWithoutTech_categoriesInput;
  Portfolio_TechUpdateManyWithWhereWithoutTech_categoriesInput: Portfolio_TechUpdateManyWithWhereWithoutTech_categoriesInput;
  Portfolio_TechScalarWhereInput: Portfolio_TechScalarWhereInput;
  Portfolio_TechUpdateManyMutationInput: Portfolio_TechUpdateManyMutationInput;
  Portfolio_TechCategoryUpdateWithWhereUniqueWithoutProjectInput: Portfolio_TechCategoryUpdateWithWhereUniqueWithoutProjectInput;
  Portfolio_TechCategoryUpdateManyWithWhereWithoutProjectInput: Portfolio_TechCategoryUpdateManyWithWhereWithoutProjectInput;
  Portfolio_TechCategoryScalarWhereInput: Portfolio_TechCategoryScalarWhereInput;
  Portfolio_TechCategoryUpdateManyMutationInput: Portfolio_TechCategoryUpdateManyMutationInput;
  Portfolio_QuestionUpdateManyWithoutProjectInput: Portfolio_QuestionUpdateManyWithoutProjectInput;
  Portfolio_QuestionUpsertWithWhereUniqueWithoutProjectInput: Portfolio_QuestionUpsertWithWhereUniqueWithoutProjectInput;
  Portfolio_QuestionUpdateWithoutProjectInput: Portfolio_QuestionUpdateWithoutProjectInput;
  Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput: Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput;
  Portfolio_AnswerUpsertWithoutQuestionInput: Portfolio_AnswerUpsertWithoutQuestionInput;
  Portfolio_AnswerUpdateWithoutQuestionInput: Portfolio_AnswerUpdateWithoutQuestionInput;
  Portfolio_QuestionUpdateWithWhereUniqueWithoutProjectInput: Portfolio_QuestionUpdateWithWhereUniqueWithoutProjectInput;
  Portfolio_QuestionUpdateManyWithWhereWithoutProjectInput: Portfolio_QuestionUpdateManyWithWhereWithoutProjectInput;
  Portfolio_QuestionScalarWhereInput: Portfolio_QuestionScalarWhereInput;
  Portfolio_QuestionUpdateManyMutationInput: Portfolio_QuestionUpdateManyMutationInput;
  Portfolio_SketchUpdateManyWithoutProjectInput: Portfolio_SketchUpdateManyWithoutProjectInput;
  Portfolio_SketchUpsertWithWhereUniqueWithoutProjectInput: Portfolio_SketchUpsertWithWhereUniqueWithoutProjectInput;
  Portfolio_SketchUpdateWithoutProjectInput: Portfolio_SketchUpdateWithoutProjectInput;
  Portfolio_SketchUpdateWithWhereUniqueWithoutProjectInput: Portfolio_SketchUpdateWithWhereUniqueWithoutProjectInput;
  Portfolio_SketchUpdateManyWithWhereWithoutProjectInput: Portfolio_SketchUpdateManyWithWhereWithoutProjectInput;
  Portfolio_SketchScalarWhereInput: Portfolio_SketchScalarWhereInput;
  Portfolio_SketchUpdateManyMutationInput: Portfolio_SketchUpdateManyMutationInput;
  Portfolio_ProjectUpdateWithWhereUniqueWithoutAdminInput: Portfolio_ProjectUpdateWithWhereUniqueWithoutAdminInput;
  Portfolio_ProjectUpdateManyWithWhereWithoutAdminInput: Portfolio_ProjectUpdateManyWithWhereWithoutAdminInput;
  Portfolio_ProjectScalarWhereInput: Portfolio_ProjectScalarWhereInput;
  Portfolio_ProjectUpdateManyMutationInput: Portfolio_ProjectUpdateManyMutationInput;
  Portfolio_AffectedRowsOutput: ResolverTypeWrapper<Portfolio_AffectedRowsOutput>;
  Portfolio_AnswerCreateInput: Portfolio_AnswerCreateInput;
  Portfolio_QuestionCreateNestedOneWithoutAnswerInput: Portfolio_QuestionCreateNestedOneWithoutAnswerInput;
  Portfolio_QuestionCreateWithoutAnswerInput: Portfolio_QuestionCreateWithoutAnswerInput;
  Portfolio_ProjectCreateNestedOneWithoutQuestionsInput: Portfolio_ProjectCreateNestedOneWithoutQuestionsInput;
  Portfolio_ProjectCreateWithoutQuestionsInput: Portfolio_ProjectCreateWithoutQuestionsInput;
  Portfolio_AdminCreateNestedOneWithoutProjectsInput: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
  Portfolio_AdminCreateWithoutProjectsInput: Portfolio_AdminCreateWithoutProjectsInput;
  Portfolio_AboutCreateNestedManyWithoutAdminInput: Portfolio_AboutCreateNestedManyWithoutAdminInput;
  Portfolio_AboutCreateWithoutAdminInput: Portfolio_AboutCreateWithoutAdminInput;
  Portfolio_AboutCreateOrConnectWithoutAdminInput: Portfolio_AboutCreateOrConnectWithoutAdminInput;
  Portfolio_AboutCreateManyAdminInputEnvelope: Portfolio_AboutCreateManyAdminInputEnvelope;
  Portfolio_AboutCreateManyAdminInput: Portfolio_AboutCreateManyAdminInput;
  Portfolio_AdminCreateOrConnectWithoutProjectsInput: Portfolio_AdminCreateOrConnectWithoutProjectsInput;
  Portfolio_ProjectCreateOrConnectWithoutQuestionsInput: Portfolio_ProjectCreateOrConnectWithoutQuestionsInput;
  Portfolio_QuestionCreateOrConnectWithoutAnswerInput: Portfolio_QuestionCreateOrConnectWithoutAnswerInput;
  Portfolio_AnswerUpdateInput: Portfolio_AnswerUpdateInput;
  Portfolio_QuestionUpdateOneWithoutAnswerInput: Portfolio_QuestionUpdateOneWithoutAnswerInput;
  Portfolio_QuestionUpsertWithoutAnswerInput: Portfolio_QuestionUpsertWithoutAnswerInput;
  Portfolio_QuestionUpdateWithoutAnswerInput: Portfolio_QuestionUpdateWithoutAnswerInput;
  Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput: Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput;
  Portfolio_ProjectUpsertWithoutQuestionsInput: Portfolio_ProjectUpsertWithoutQuestionsInput;
  Portfolio_ProjectUpdateWithoutQuestionsInput: Portfolio_ProjectUpdateWithoutQuestionsInput;
  Portfolio_AdminUpdateOneRequiredWithoutProjectsInput: Portfolio_AdminUpdateOneRequiredWithoutProjectsInput;
  Portfolio_AdminUpsertWithoutProjectsInput: Portfolio_AdminUpsertWithoutProjectsInput;
  Portfolio_AdminUpdateWithoutProjectsInput: Portfolio_AdminUpdateWithoutProjectsInput;
  Portfolio_AboutUpdateManyWithoutAdminInput: Portfolio_AboutUpdateManyWithoutAdminInput;
  Portfolio_AboutUpsertWithWhereUniqueWithoutAdminInput: Portfolio_AboutUpsertWithWhereUniqueWithoutAdminInput;
  Portfolio_AboutUpdateWithoutAdminInput: Portfolio_AboutUpdateWithoutAdminInput;
  Portfolio_AboutUpdateWithWhereUniqueWithoutAdminInput: Portfolio_AboutUpdateWithWhereUniqueWithoutAdminInput;
  Portfolio_AboutUpdateManyWithWhereWithoutAdminInput: Portfolio_AboutUpdateManyWithWhereWithoutAdminInput;
  Portfolio_AboutScalarWhereInput: Portfolio_AboutScalarWhereInput;
  Portfolio_AboutUpdateManyMutationInput: Portfolio_AboutUpdateManyMutationInput;
  Portfolio_MessageCreateInput: Portfolio_MessageCreateInput;
  Portfolio_AdminCreateNestedOneWithoutMessagesInput: Portfolio_AdminCreateNestedOneWithoutMessagesInput;
  Portfolio_AdminCreateWithoutMessagesInput: Portfolio_AdminCreateWithoutMessagesInput;
  Portfolio_AdminCreateOrConnectWithoutMessagesInput: Portfolio_AdminCreateOrConnectWithoutMessagesInput;
  Portfolio_MessageUpdateInput: Portfolio_MessageUpdateInput;
  Portfolio_AdminUpdateOneRequiredWithoutMessagesInput: Portfolio_AdminUpdateOneRequiredWithoutMessagesInput;
  Portfolio_AdminUpsertWithoutMessagesInput: Portfolio_AdminUpsertWithoutMessagesInput;
  Portfolio_AdminUpdateWithoutMessagesInput: Portfolio_AdminUpdateWithoutMessagesInput;
  Portfolio_ProjectCreateInput: Portfolio_ProjectCreateInput;
  Portfolio_ProjectUpdateInput: Portfolio_ProjectUpdateInput;
  Portfolio_QuestionCreateInput: Portfolio_QuestionCreateInput;
  Portfolio_QuestionUpdateInput: Portfolio_QuestionUpdateInput;
  Portfolio_SketchCreateInput: Portfolio_SketchCreateInput;
  Portfolio_ProjectCreateNestedOneWithoutSketchesInput: Portfolio_ProjectCreateNestedOneWithoutSketchesInput;
  Portfolio_ProjectCreateWithoutSketchesInput: Portfolio_ProjectCreateWithoutSketchesInput;
  Portfolio_ProjectCreateOrConnectWithoutSketchesInput: Portfolio_ProjectCreateOrConnectWithoutSketchesInput;
  Portfolio_SketchUpdateInput: Portfolio_SketchUpdateInput;
  Portfolio_ProjectUpdateOneRequiredWithoutSketchesInput: Portfolio_ProjectUpdateOneRequiredWithoutSketchesInput;
  Portfolio_ProjectUpsertWithoutSketchesInput: Portfolio_ProjectUpsertWithoutSketchesInput;
  Portfolio_ProjectUpdateWithoutSketchesInput: Portfolio_ProjectUpdateWithoutSketchesInput;
  Portfolio_TechCreateInput: Portfolio_TechCreateInput;
  Portfolio_TechCategoryCreateNestedOneWithoutTechsInput: Portfolio_TechCategoryCreateNestedOneWithoutTechsInput;
  Portfolio_TechCategoryCreateWithoutTechsInput: Portfolio_TechCategoryCreateWithoutTechsInput;
  Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput: Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput;
  Portfolio_ProjectCreateWithoutTech_categoriesInput: Portfolio_ProjectCreateWithoutTech_categoriesInput;
  Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput: Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput;
  Portfolio_TechCategoryCreateOrConnectWithoutTechsInput: Portfolio_TechCategoryCreateOrConnectWithoutTechsInput;
  Portfolio_TechUpdateInput: Portfolio_TechUpdateInput;
  Portfolio_TechCategoryUpdateOneRequiredWithoutTechsInput: Portfolio_TechCategoryUpdateOneRequiredWithoutTechsInput;
  Portfolio_TechCategoryUpsertWithoutTechsInput: Portfolio_TechCategoryUpsertWithoutTechsInput;
  Portfolio_TechCategoryUpdateWithoutTechsInput: Portfolio_TechCategoryUpdateWithoutTechsInput;
  Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput: Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput;
  Portfolio_ProjectUpsertWithoutTech_categoriesInput: Portfolio_ProjectUpsertWithoutTech_categoriesInput;
  Portfolio_ProjectUpdateWithoutTech_categoriesInput: Portfolio_ProjectUpdateWithoutTech_categoriesInput;
  Portfolio_TechCategoryCreateInput: Portfolio_TechCategoryCreateInput;
  Portfolio_TechCategoryUpdateInput: Portfolio_TechCategoryUpdateInput;
  Portfolio_LoginReturnType: ResolverTypeWrapper<Portfolio_LoginReturnType>;
  Portfolio_LoginInputType: Portfolio_LoginInputType;
  Portfolio_AdminCreateInput: Portfolio_AdminCreateInput;
  Portfolio_AdminUpdateInput: Portfolio_AdminUpdateInput;
  Portfolio_Upload: ResolverTypeWrapper<Scalars['Portfolio_Upload']>;
  Portfolio: ResolverTypeWrapper<Portfolio>;
  Query: ResolverTypeWrapper<{}>;
  StringQueryOperatorInput: StringQueryOperatorInput;
  IntQueryOperatorInput: IntQueryOperatorInput;
  DateQueryOperatorInput: DateQueryOperatorInput;
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  ImageSharpFilterListInput: ImageSharpFilterListInput;
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  JSONQueryOperatorInput: JSONQueryOperatorInput;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  InternalFilterInput: InternalFilterInput;
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  FileConnection: ResolverTypeWrapper<FileConnection>;
  FileEdge: ResolverTypeWrapper<FileEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  FileFieldsEnum: FileFieldsEnum;
  FileGroupConnection: ResolverTypeWrapper<FileGroupConnection>;
  FileFilterInput: FileFilterInput;
  FileSortInput: FileSortInput;
  SortOrderEnum: SortOrderEnum;
  DirectoryConnection: ResolverTypeWrapper<DirectoryConnection>;
  DirectoryEdge: ResolverTypeWrapper<DirectoryEdge>;
  DirectoryFieldsEnum: DirectoryFieldsEnum;
  DirectoryGroupConnection: ResolverTypeWrapper<DirectoryGroupConnection>;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectorySortInput: DirectorySortInput;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  SiteConnection: ResolverTypeWrapper<SiteConnection>;
  SiteEdge: ResolverTypeWrapper<SiteEdge>;
  SiteFieldsEnum: SiteFieldsEnum;
  SiteGroupConnection: ResolverTypeWrapper<SiteGroupConnection>;
  SiteFilterInput: SiteFilterInput;
  SiteSortInput: SiteSortInput;
  SiteFunctionConnection: ResolverTypeWrapper<SiteFunctionConnection>;
  SiteFunctionEdge: ResolverTypeWrapper<SiteFunctionEdge>;
  SiteFunctionFieldsEnum: SiteFunctionFieldsEnum;
  SiteFunctionGroupConnection: ResolverTypeWrapper<SiteFunctionGroupConnection>;
  SiteFunctionFilterInput: SiteFunctionFilterInput;
  SiteFunctionSortInput: SiteFunctionSortInput;
  SitePageContextFilterInput: SitePageContextFilterInput;
  SitePageContextProjectFilterInput: SitePageContextProjectFilterInput;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePluginPluginOptionsFilterInput: SitePluginPluginOptionsFilterInput;
  SitePluginPluginOptionsEmitSchemaFilterInput: SitePluginPluginOptionsEmitSchemaFilterInput;
  SitePluginPluginOptionsEmitPluginDocumentsFilterInput: SitePluginPluginOptionsEmitPluginDocumentsFilterInput;
  SitePluginPackageJsonFilterInput: SitePluginPackageJsonFilterInput;
  SitePluginPackageJsonDependenciesFilterListInput: SitePluginPackageJsonDependenciesFilterListInput;
  SitePluginPackageJsonDependenciesFilterInput: SitePluginPackageJsonDependenciesFilterInput;
  SitePluginPackageJsonDevDependenciesFilterListInput: SitePluginPackageJsonDevDependenciesFilterListInput;
  SitePluginPackageJsonDevDependenciesFilterInput: SitePluginPackageJsonDevDependenciesFilterInput;
  SitePluginPackageJsonPeerDependenciesFilterListInput: SitePluginPackageJsonPeerDependenciesFilterListInput;
  SitePluginPackageJsonPeerDependenciesFilterInput: SitePluginPackageJsonPeerDependenciesFilterInput;
  SitePageConnection: ResolverTypeWrapper<SitePageConnection>;
  SitePageEdge: ResolverTypeWrapper<SitePageEdge>;
  SitePageFieldsEnum: SitePageFieldsEnum;
  SitePageGroupConnection: ResolverTypeWrapper<SitePageGroupConnection>;
  SitePageFilterInput: SitePageFilterInput;
  SitePageSortInput: SitePageSortInput;
  ImageSharpConnection: ResolverTypeWrapper<ImageSharpConnection>;
  ImageSharpEdge: ResolverTypeWrapper<ImageSharpEdge>;
  ImageSharpFieldsEnum: ImageSharpFieldsEnum;
  ImageSharpGroupConnection: ResolverTypeWrapper<ImageSharpGroupConnection>;
  ImageSharpSortInput: ImageSharpSortInput;
  SitePluginConnection: ResolverTypeWrapper<SitePluginConnection>;
  SitePluginEdge: ResolverTypeWrapper<SitePluginEdge>;
  SitePluginFieldsEnum: SitePluginFieldsEnum;
  SitePluginGroupConnection: ResolverTypeWrapper<SitePluginGroupConnection>;
  SitePluginSortInput: SitePluginSortInput;
  SiteBuildMetadataConnection: ResolverTypeWrapper<SiteBuildMetadataConnection>;
  SiteBuildMetadataEdge: ResolverTypeWrapper<SiteBuildMetadataEdge>;
  SiteBuildMetadataFieldsEnum: SiteBuildMetadataFieldsEnum;
  SiteBuildMetadataGroupConnection: ResolverTypeWrapper<SiteBuildMetadataGroupConnection>;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  GraphQLSourceConnection: ResolverTypeWrapper<GraphQLSourceConnection>;
  GraphQLSourceEdge: ResolverTypeWrapper<GraphQLSourceEdge>;
  GraphQLSourceFieldsEnum: GraphQLSourceFieldsEnum;
  GraphQLSourceGroupConnection: ResolverTypeWrapper<GraphQLSourceGroupConnection>;
  GraphQLSourceFilterInput: GraphQLSourceFilterInput;
  GraphQLSourceSortInput: GraphQLSourceSortInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  File: File;
  Node: ResolversParentTypes['File'] | ResolversParentTypes['Directory'] | ResolversParentTypes['Site'] | ResolversParentTypes['SiteFunction'] | ResolversParentTypes['SitePage'] | ResolversParentTypes['ImageSharp'] | ResolversParentTypes['SitePlugin'] | ResolversParentTypes['SiteBuildMetadata'] | ResolversParentTypes['GraphQLSource'];
  ID: Scalars['ID'];
  Internal: Internal;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  Directory: Directory;
  Site: Site;
  SiteSiteMetadata: SiteSiteMetadata;
  SiteFunction: SiteFunction;
  SitePage: SitePage;
  SitePageContext: SitePageContext;
  SitePageContextProject: SitePageContextProject;
  DuotoneGradient: DuotoneGradient;
  Potrace: Potrace;
  ImageSharp: ImageSharp;
  ImageSharpFixed: ImageSharpFixed;
  ImageSharpFluid: ImageSharpFluid;
  JSON: Scalars['JSON'];
  BlurredOptions: BlurredOptions;
  JPGOptions: JPGOptions;
  PNGOptions: PNGOptions;
  WebPOptions: WebPOptions;
  AVIFOptions: AVIFOptions;
  TransformOptions: TransformOptions;
  ImageSharpOriginal: ImageSharpOriginal;
  ImageSharpResize: ImageSharpResize;
  SitePlugin: SitePlugin;
  SitePluginPluginOptions: SitePluginPluginOptions;
  SitePluginPluginOptionsEmitSchema: SitePluginPluginOptionsEmitSchema;
  SitePluginPluginOptionsEmitPluginDocuments: SitePluginPluginOptionsEmitPluginDocuments;
  SitePluginPackageJson: SitePluginPackageJson;
  SitePluginPackageJsonDependencies: SitePluginPackageJsonDependencies;
  SitePluginPackageJsonDevDependencies: SitePluginPackageJsonDevDependencies;
  SitePluginPackageJsonPeerDependencies: SitePluginPackageJsonPeerDependencies;
  SiteBuildMetadata: SiteBuildMetadata;
  GraphQLSource: GraphQLSource;
  Portfolio_About: Portfolio_About;
  Portfolio_DateTime: Scalars['Portfolio_DateTime'];
  Portfolio_Admin: Portfolio_Admin;
  Portfolio_AdminCount: Portfolio_AdminCount;
  Portfolio_AboutWhereUniqueInput: Portfolio_AboutWhereUniqueInput;
  Portfolio_AboutWhereInput: Portfolio_AboutWhereInput;
  Portfolio_StringFilter: Portfolio_StringFilter;
  Portfolio_NestedStringFilter: Portfolio_NestedStringFilter;
  Portfolio_AdminRelationFilter: Portfolio_AdminRelationFilter;
  Portfolio_AdminWhereInput: Portfolio_AdminWhereInput;
  Portfolio_StringNullableListFilter: Portfolio_StringNullableListFilter;
  Portfolio_BoolFilter: Portfolio_BoolFilter;
  Portfolio_NestedBoolFilter: Portfolio_NestedBoolFilter;
  Portfolio_AboutListRelationFilter: Portfolio_AboutListRelationFilter;
  Portfolio_MessageListRelationFilter: Portfolio_MessageListRelationFilter;
  Portfolio_MessageWhereInput: Portfolio_MessageWhereInput;
  Portfolio_DateTimeFilter: Portfolio_DateTimeFilter;
  Portfolio_NestedDateTimeFilter: Portfolio_NestedDateTimeFilter;
  Portfolio_ProjectListRelationFilter: Portfolio_ProjectListRelationFilter;
  Portfolio_ProjectWhereInput: Portfolio_ProjectWhereInput;
  Portfolio_TechCategoryListRelationFilter: Portfolio_TechCategoryListRelationFilter;
  Portfolio_TechCategoryWhereInput: Portfolio_TechCategoryWhereInput;
  Portfolio_TechListRelationFilter: Portfolio_TechListRelationFilter;
  Portfolio_TechWhereInput: Portfolio_TechWhereInput;
  Portfolio_TechCategoryRelationFilter: Portfolio_TechCategoryRelationFilter;
  Portfolio_ProjectRelationFilter: Portfolio_ProjectRelationFilter;
  Portfolio_QuestionListRelationFilter: Portfolio_QuestionListRelationFilter;
  Portfolio_QuestionWhereInput: Portfolio_QuestionWhereInput;
  Portfolio_AnswerRelationFilter: Portfolio_AnswerRelationFilter;
  Portfolio_AnswerWhereInput: Portfolio_AnswerWhereInput;
  Portfolio_QuestionRelationFilter: Portfolio_QuestionRelationFilter;
  Portfolio_SketchListRelationFilter: Portfolio_SketchListRelationFilter;
  Portfolio_SketchWhereInput: Portfolio_SketchWhereInput;
  Portfolio_AboutOrderByWithRelationInput: Portfolio_AboutOrderByWithRelationInput;
  Portfolio_AdminOrderByWithRelationInput: Portfolio_AdminOrderByWithRelationInput;
  Portfolio_AboutOrderByRelationAggregateInput: Portfolio_AboutOrderByRelationAggregateInput;
  Portfolio_MessageOrderByRelationAggregateInput: Portfolio_MessageOrderByRelationAggregateInput;
  Portfolio_ProjectOrderByRelationAggregateInput: Portfolio_ProjectOrderByRelationAggregateInput;
  Portfolio_Answer: Portfolio_Answer;
  Portfolio_Question: Portfolio_Question;
  Portfolio_Project: Portfolio_Project;
  Portfolio_ProjectCount: Portfolio_ProjectCount;
  Portfolio_TechCategory: Portfolio_TechCategory;
  Portfolio_TechCategoryCount: Portfolio_TechCategoryCount;
  Portfolio_Tech: Portfolio_Tech;
  Portfolio_TechOrderByWithRelationInput: Portfolio_TechOrderByWithRelationInput;
  Portfolio_TechCategoryOrderByWithRelationInput: Portfolio_TechCategoryOrderByWithRelationInput;
  Portfolio_TechOrderByRelationAggregateInput: Portfolio_TechOrderByRelationAggregateInput;
  Portfolio_ProjectOrderByWithRelationInput: Portfolio_ProjectOrderByWithRelationInput;
  Portfolio_TechCategoryOrderByRelationAggregateInput: Portfolio_TechCategoryOrderByRelationAggregateInput;
  Portfolio_QuestionOrderByRelationAggregateInput: Portfolio_QuestionOrderByRelationAggregateInput;
  Portfolio_SketchOrderByRelationAggregateInput: Portfolio_SketchOrderByRelationAggregateInput;
  Portfolio_TechWhereUniqueInput: Portfolio_TechWhereUniqueInput;
  Portfolio_TechCategoryWhereUniqueInput: Portfolio_TechCategoryWhereUniqueInput;
  Portfolio_QuestionOrderByWithRelationInput: Portfolio_QuestionOrderByWithRelationInput;
  Portfolio_AnswerOrderByWithRelationInput: Portfolio_AnswerOrderByWithRelationInput;
  Portfolio_QuestionWhereUniqueInput: Portfolio_QuestionWhereUniqueInput;
  Portfolio_Sketch: Portfolio_Sketch;
  Portfolio_SketchOrderByWithRelationInput: Portfolio_SketchOrderByWithRelationInput;
  Portfolio_SketchWhereUniqueInput: Portfolio_SketchWhereUniqueInput;
  Portfolio_AnswerWhereUniqueInput: Portfolio_AnswerWhereUniqueInput;
  Portfolio_Message: Portfolio_Message;
  Portfolio_MessageWhereUniqueInput: Portfolio_MessageWhereUniqueInput;
  Portfolio_MessageOrderByWithRelationInput: Portfolio_MessageOrderByWithRelationInput;
  Portfolio_ProjectWhereUniqueInput: Portfolio_ProjectWhereUniqueInput;
  Portfolio_AboutCreateInput: Portfolio_AboutCreateInput;
  Portfolio_AdminCreateNestedOneWithoutAboutInput: Portfolio_AdminCreateNestedOneWithoutAboutInput;
  Portfolio_AdminCreateWithoutAboutInput: Portfolio_AdminCreateWithoutAboutInput;
  Portfolio_AdminCreateresumesInput: Portfolio_AdminCreateresumesInput;
  Portfolio_MessageCreateNestedManyWithoutAdminInput: Portfolio_MessageCreateNestedManyWithoutAdminInput;
  Portfolio_MessageCreateWithoutAdminInput: Portfolio_MessageCreateWithoutAdminInput;
  Portfolio_MessageCreateOrConnectWithoutAdminInput: Portfolio_MessageCreateOrConnectWithoutAdminInput;
  Portfolio_MessageCreateManyAdminInputEnvelope: Portfolio_MessageCreateManyAdminInputEnvelope;
  Portfolio_MessageCreateManyAdminInput: Portfolio_MessageCreateManyAdminInput;
  Portfolio_ProjectCreateNestedManyWithoutAdminInput: Portfolio_ProjectCreateNestedManyWithoutAdminInput;
  Portfolio_ProjectCreateWithoutAdminInput: Portfolio_ProjectCreateWithoutAdminInput;
  Portfolio_TechCategoryCreateNestedManyWithoutProjectInput: Portfolio_TechCategoryCreateNestedManyWithoutProjectInput;
  Portfolio_TechCategoryCreateWithoutProjectInput: Portfolio_TechCategoryCreateWithoutProjectInput;
  Portfolio_TechCreateNestedManyWithoutTech_categoriesInput: Portfolio_TechCreateNestedManyWithoutTech_categoriesInput;
  Portfolio_TechCreateWithoutTech_categoriesInput: Portfolio_TechCreateWithoutTech_categoriesInput;
  Portfolio_TechCreateOrConnectWithoutTech_categoriesInput: Portfolio_TechCreateOrConnectWithoutTech_categoriesInput;
  Portfolio_TechCreateManyTech_categoriesInputEnvelope: Portfolio_TechCreateManyTech_categoriesInputEnvelope;
  Portfolio_TechCreateManyTech_categoriesInput: Portfolio_TechCreateManyTech_categoriesInput;
  Portfolio_TechCategoryCreateOrConnectWithoutProjectInput: Portfolio_TechCategoryCreateOrConnectWithoutProjectInput;
  Portfolio_TechCategoryCreateManyProjectInputEnvelope: Portfolio_TechCategoryCreateManyProjectInputEnvelope;
  Portfolio_TechCategoryCreateManyProjectInput: Portfolio_TechCategoryCreateManyProjectInput;
  Portfolio_QuestionCreateNestedManyWithoutProjectInput: Portfolio_QuestionCreateNestedManyWithoutProjectInput;
  Portfolio_QuestionCreateWithoutProjectInput: Portfolio_QuestionCreateWithoutProjectInput;
  Portfolio_AnswerCreateNestedOneWithoutQuestionInput: Portfolio_AnswerCreateNestedOneWithoutQuestionInput;
  Portfolio_AnswerCreateWithoutQuestionInput: Portfolio_AnswerCreateWithoutQuestionInput;
  Portfolio_AnswerCreateOrConnectWithoutQuestionInput: Portfolio_AnswerCreateOrConnectWithoutQuestionInput;
  Portfolio_QuestionCreateOrConnectWithoutProjectInput: Portfolio_QuestionCreateOrConnectWithoutProjectInput;
  Portfolio_QuestionCreateManyProjectInputEnvelope: Portfolio_QuestionCreateManyProjectInputEnvelope;
  Portfolio_QuestionCreateManyProjectInput: Portfolio_QuestionCreateManyProjectInput;
  Portfolio_SketchCreateNestedManyWithoutProjectInput: Portfolio_SketchCreateNestedManyWithoutProjectInput;
  Portfolio_SketchCreateWithoutProjectInput: Portfolio_SketchCreateWithoutProjectInput;
  Portfolio_SketchCreateOrConnectWithoutProjectInput: Portfolio_SketchCreateOrConnectWithoutProjectInput;
  Portfolio_SketchCreateManyProjectInputEnvelope: Portfolio_SketchCreateManyProjectInputEnvelope;
  Portfolio_SketchCreateManyProjectInput: Portfolio_SketchCreateManyProjectInput;
  Portfolio_ProjectCreateOrConnectWithoutAdminInput: Portfolio_ProjectCreateOrConnectWithoutAdminInput;
  Portfolio_ProjectCreateManyAdminInputEnvelope: Portfolio_ProjectCreateManyAdminInputEnvelope;
  Portfolio_ProjectCreateManyAdminInput: Portfolio_ProjectCreateManyAdminInput;
  Portfolio_AdminCreateOrConnectWithoutAboutInput: Portfolio_AdminCreateOrConnectWithoutAboutInput;
  Portfolio_AdminWhereUniqueInput: Portfolio_AdminWhereUniqueInput;
  Portfolio_AboutUpdateInput: Portfolio_AboutUpdateInput;
  Portfolio_StringFieldUpdateOperationsInput: Portfolio_StringFieldUpdateOperationsInput;
  Portfolio_DateTimeFieldUpdateOperationsInput: Portfolio_DateTimeFieldUpdateOperationsInput;
  Portfolio_AdminUpdateOneRequiredWithoutAboutInput: Portfolio_AdminUpdateOneRequiredWithoutAboutInput;
  Portfolio_AdminUpsertWithoutAboutInput: Portfolio_AdminUpsertWithoutAboutInput;
  Portfolio_AdminUpdateWithoutAboutInput: Portfolio_AdminUpdateWithoutAboutInput;
  Portfolio_BoolFieldUpdateOperationsInput: Portfolio_BoolFieldUpdateOperationsInput;
  Portfolio_AdminUpdateresumesInput: Portfolio_AdminUpdateresumesInput;
  Portfolio_MessageUpdateManyWithoutAdminInput: Portfolio_MessageUpdateManyWithoutAdminInput;
  Portfolio_MessageUpsertWithWhereUniqueWithoutAdminInput: Portfolio_MessageUpsertWithWhereUniqueWithoutAdminInput;
  Portfolio_MessageUpdateWithoutAdminInput: Portfolio_MessageUpdateWithoutAdminInput;
  Portfolio_MessageUpdateWithWhereUniqueWithoutAdminInput: Portfolio_MessageUpdateWithWhereUniqueWithoutAdminInput;
  Portfolio_MessageUpdateManyWithWhereWithoutAdminInput: Portfolio_MessageUpdateManyWithWhereWithoutAdminInput;
  Portfolio_MessageScalarWhereInput: Portfolio_MessageScalarWhereInput;
  Portfolio_MessageUpdateManyMutationInput: Portfolio_MessageUpdateManyMutationInput;
  Portfolio_ProjectUpdateManyWithoutAdminInput: Portfolio_ProjectUpdateManyWithoutAdminInput;
  Portfolio_ProjectUpsertWithWhereUniqueWithoutAdminInput: Portfolio_ProjectUpsertWithWhereUniqueWithoutAdminInput;
  Portfolio_ProjectUpdateWithoutAdminInput: Portfolio_ProjectUpdateWithoutAdminInput;
  Portfolio_TechCategoryUpdateManyWithoutProjectInput: Portfolio_TechCategoryUpdateManyWithoutProjectInput;
  Portfolio_TechCategoryUpsertWithWhereUniqueWithoutProjectInput: Portfolio_TechCategoryUpsertWithWhereUniqueWithoutProjectInput;
  Portfolio_TechCategoryUpdateWithoutProjectInput: Portfolio_TechCategoryUpdateWithoutProjectInput;
  Portfolio_TechUpdateManyWithoutTech_categoriesInput: Portfolio_TechUpdateManyWithoutTech_categoriesInput;
  Portfolio_TechUpsertWithWhereUniqueWithoutTech_categoriesInput: Portfolio_TechUpsertWithWhereUniqueWithoutTech_categoriesInput;
  Portfolio_TechUpdateWithoutTech_categoriesInput: Portfolio_TechUpdateWithoutTech_categoriesInput;
  Portfolio_TechUpdateWithWhereUniqueWithoutTech_categoriesInput: Portfolio_TechUpdateWithWhereUniqueWithoutTech_categoriesInput;
  Portfolio_TechUpdateManyWithWhereWithoutTech_categoriesInput: Portfolio_TechUpdateManyWithWhereWithoutTech_categoriesInput;
  Portfolio_TechScalarWhereInput: Portfolio_TechScalarWhereInput;
  Portfolio_TechUpdateManyMutationInput: Portfolio_TechUpdateManyMutationInput;
  Portfolio_TechCategoryUpdateWithWhereUniqueWithoutProjectInput: Portfolio_TechCategoryUpdateWithWhereUniqueWithoutProjectInput;
  Portfolio_TechCategoryUpdateManyWithWhereWithoutProjectInput: Portfolio_TechCategoryUpdateManyWithWhereWithoutProjectInput;
  Portfolio_TechCategoryScalarWhereInput: Portfolio_TechCategoryScalarWhereInput;
  Portfolio_TechCategoryUpdateManyMutationInput: Portfolio_TechCategoryUpdateManyMutationInput;
  Portfolio_QuestionUpdateManyWithoutProjectInput: Portfolio_QuestionUpdateManyWithoutProjectInput;
  Portfolio_QuestionUpsertWithWhereUniqueWithoutProjectInput: Portfolio_QuestionUpsertWithWhereUniqueWithoutProjectInput;
  Portfolio_QuestionUpdateWithoutProjectInput: Portfolio_QuestionUpdateWithoutProjectInput;
  Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput: Portfolio_AnswerUpdateOneRequiredWithoutQuestionInput;
  Portfolio_AnswerUpsertWithoutQuestionInput: Portfolio_AnswerUpsertWithoutQuestionInput;
  Portfolio_AnswerUpdateWithoutQuestionInput: Portfolio_AnswerUpdateWithoutQuestionInput;
  Portfolio_QuestionUpdateWithWhereUniqueWithoutProjectInput: Portfolio_QuestionUpdateWithWhereUniqueWithoutProjectInput;
  Portfolio_QuestionUpdateManyWithWhereWithoutProjectInput: Portfolio_QuestionUpdateManyWithWhereWithoutProjectInput;
  Portfolio_QuestionScalarWhereInput: Portfolio_QuestionScalarWhereInput;
  Portfolio_QuestionUpdateManyMutationInput: Portfolio_QuestionUpdateManyMutationInput;
  Portfolio_SketchUpdateManyWithoutProjectInput: Portfolio_SketchUpdateManyWithoutProjectInput;
  Portfolio_SketchUpsertWithWhereUniqueWithoutProjectInput: Portfolio_SketchUpsertWithWhereUniqueWithoutProjectInput;
  Portfolio_SketchUpdateWithoutProjectInput: Portfolio_SketchUpdateWithoutProjectInput;
  Portfolio_SketchUpdateWithWhereUniqueWithoutProjectInput: Portfolio_SketchUpdateWithWhereUniqueWithoutProjectInput;
  Portfolio_SketchUpdateManyWithWhereWithoutProjectInput: Portfolio_SketchUpdateManyWithWhereWithoutProjectInput;
  Portfolio_SketchScalarWhereInput: Portfolio_SketchScalarWhereInput;
  Portfolio_SketchUpdateManyMutationInput: Portfolio_SketchUpdateManyMutationInput;
  Portfolio_ProjectUpdateWithWhereUniqueWithoutAdminInput: Portfolio_ProjectUpdateWithWhereUniqueWithoutAdminInput;
  Portfolio_ProjectUpdateManyWithWhereWithoutAdminInput: Portfolio_ProjectUpdateManyWithWhereWithoutAdminInput;
  Portfolio_ProjectScalarWhereInput: Portfolio_ProjectScalarWhereInput;
  Portfolio_ProjectUpdateManyMutationInput: Portfolio_ProjectUpdateManyMutationInput;
  Portfolio_AffectedRowsOutput: Portfolio_AffectedRowsOutput;
  Portfolio_AnswerCreateInput: Portfolio_AnswerCreateInput;
  Portfolio_QuestionCreateNestedOneWithoutAnswerInput: Portfolio_QuestionCreateNestedOneWithoutAnswerInput;
  Portfolio_QuestionCreateWithoutAnswerInput: Portfolio_QuestionCreateWithoutAnswerInput;
  Portfolio_ProjectCreateNestedOneWithoutQuestionsInput: Portfolio_ProjectCreateNestedOneWithoutQuestionsInput;
  Portfolio_ProjectCreateWithoutQuestionsInput: Portfolio_ProjectCreateWithoutQuestionsInput;
  Portfolio_AdminCreateNestedOneWithoutProjectsInput: Portfolio_AdminCreateNestedOneWithoutProjectsInput;
  Portfolio_AdminCreateWithoutProjectsInput: Portfolio_AdminCreateWithoutProjectsInput;
  Portfolio_AboutCreateNestedManyWithoutAdminInput: Portfolio_AboutCreateNestedManyWithoutAdminInput;
  Portfolio_AboutCreateWithoutAdminInput: Portfolio_AboutCreateWithoutAdminInput;
  Portfolio_AboutCreateOrConnectWithoutAdminInput: Portfolio_AboutCreateOrConnectWithoutAdminInput;
  Portfolio_AboutCreateManyAdminInputEnvelope: Portfolio_AboutCreateManyAdminInputEnvelope;
  Portfolio_AboutCreateManyAdminInput: Portfolio_AboutCreateManyAdminInput;
  Portfolio_AdminCreateOrConnectWithoutProjectsInput: Portfolio_AdminCreateOrConnectWithoutProjectsInput;
  Portfolio_ProjectCreateOrConnectWithoutQuestionsInput: Portfolio_ProjectCreateOrConnectWithoutQuestionsInput;
  Portfolio_QuestionCreateOrConnectWithoutAnswerInput: Portfolio_QuestionCreateOrConnectWithoutAnswerInput;
  Portfolio_AnswerUpdateInput: Portfolio_AnswerUpdateInput;
  Portfolio_QuestionUpdateOneWithoutAnswerInput: Portfolio_QuestionUpdateOneWithoutAnswerInput;
  Portfolio_QuestionUpsertWithoutAnswerInput: Portfolio_QuestionUpsertWithoutAnswerInput;
  Portfolio_QuestionUpdateWithoutAnswerInput: Portfolio_QuestionUpdateWithoutAnswerInput;
  Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput: Portfolio_ProjectUpdateOneRequiredWithoutQuestionsInput;
  Portfolio_ProjectUpsertWithoutQuestionsInput: Portfolio_ProjectUpsertWithoutQuestionsInput;
  Portfolio_ProjectUpdateWithoutQuestionsInput: Portfolio_ProjectUpdateWithoutQuestionsInput;
  Portfolio_AdminUpdateOneRequiredWithoutProjectsInput: Portfolio_AdminUpdateOneRequiredWithoutProjectsInput;
  Portfolio_AdminUpsertWithoutProjectsInput: Portfolio_AdminUpsertWithoutProjectsInput;
  Portfolio_AdminUpdateWithoutProjectsInput: Portfolio_AdminUpdateWithoutProjectsInput;
  Portfolio_AboutUpdateManyWithoutAdminInput: Portfolio_AboutUpdateManyWithoutAdminInput;
  Portfolio_AboutUpsertWithWhereUniqueWithoutAdminInput: Portfolio_AboutUpsertWithWhereUniqueWithoutAdminInput;
  Portfolio_AboutUpdateWithoutAdminInput: Portfolio_AboutUpdateWithoutAdminInput;
  Portfolio_AboutUpdateWithWhereUniqueWithoutAdminInput: Portfolio_AboutUpdateWithWhereUniqueWithoutAdminInput;
  Portfolio_AboutUpdateManyWithWhereWithoutAdminInput: Portfolio_AboutUpdateManyWithWhereWithoutAdminInput;
  Portfolio_AboutScalarWhereInput: Portfolio_AboutScalarWhereInput;
  Portfolio_AboutUpdateManyMutationInput: Portfolio_AboutUpdateManyMutationInput;
  Portfolio_MessageCreateInput: Portfolio_MessageCreateInput;
  Portfolio_AdminCreateNestedOneWithoutMessagesInput: Portfolio_AdminCreateNestedOneWithoutMessagesInput;
  Portfolio_AdminCreateWithoutMessagesInput: Portfolio_AdminCreateWithoutMessagesInput;
  Portfolio_AdminCreateOrConnectWithoutMessagesInput: Portfolio_AdminCreateOrConnectWithoutMessagesInput;
  Portfolio_MessageUpdateInput: Portfolio_MessageUpdateInput;
  Portfolio_AdminUpdateOneRequiredWithoutMessagesInput: Portfolio_AdminUpdateOneRequiredWithoutMessagesInput;
  Portfolio_AdminUpsertWithoutMessagesInput: Portfolio_AdminUpsertWithoutMessagesInput;
  Portfolio_AdminUpdateWithoutMessagesInput: Portfolio_AdminUpdateWithoutMessagesInput;
  Portfolio_ProjectCreateInput: Portfolio_ProjectCreateInput;
  Portfolio_ProjectUpdateInput: Portfolio_ProjectUpdateInput;
  Portfolio_QuestionCreateInput: Portfolio_QuestionCreateInput;
  Portfolio_QuestionUpdateInput: Portfolio_QuestionUpdateInput;
  Portfolio_SketchCreateInput: Portfolio_SketchCreateInput;
  Portfolio_ProjectCreateNestedOneWithoutSketchesInput: Portfolio_ProjectCreateNestedOneWithoutSketchesInput;
  Portfolio_ProjectCreateWithoutSketchesInput: Portfolio_ProjectCreateWithoutSketchesInput;
  Portfolio_ProjectCreateOrConnectWithoutSketchesInput: Portfolio_ProjectCreateOrConnectWithoutSketchesInput;
  Portfolio_SketchUpdateInput: Portfolio_SketchUpdateInput;
  Portfolio_ProjectUpdateOneRequiredWithoutSketchesInput: Portfolio_ProjectUpdateOneRequiredWithoutSketchesInput;
  Portfolio_ProjectUpsertWithoutSketchesInput: Portfolio_ProjectUpsertWithoutSketchesInput;
  Portfolio_ProjectUpdateWithoutSketchesInput: Portfolio_ProjectUpdateWithoutSketchesInput;
  Portfolio_TechCreateInput: Portfolio_TechCreateInput;
  Portfolio_TechCategoryCreateNestedOneWithoutTechsInput: Portfolio_TechCategoryCreateNestedOneWithoutTechsInput;
  Portfolio_TechCategoryCreateWithoutTechsInput: Portfolio_TechCategoryCreateWithoutTechsInput;
  Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput: Portfolio_ProjectCreateNestedOneWithoutTech_categoriesInput;
  Portfolio_ProjectCreateWithoutTech_categoriesInput: Portfolio_ProjectCreateWithoutTech_categoriesInput;
  Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput: Portfolio_ProjectCreateOrConnectWithoutTech_categoriesInput;
  Portfolio_TechCategoryCreateOrConnectWithoutTechsInput: Portfolio_TechCategoryCreateOrConnectWithoutTechsInput;
  Portfolio_TechUpdateInput: Portfolio_TechUpdateInput;
  Portfolio_TechCategoryUpdateOneRequiredWithoutTechsInput: Portfolio_TechCategoryUpdateOneRequiredWithoutTechsInput;
  Portfolio_TechCategoryUpsertWithoutTechsInput: Portfolio_TechCategoryUpsertWithoutTechsInput;
  Portfolio_TechCategoryUpdateWithoutTechsInput: Portfolio_TechCategoryUpdateWithoutTechsInput;
  Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput: Portfolio_ProjectUpdateOneRequiredWithoutTech_categoriesInput;
  Portfolio_ProjectUpsertWithoutTech_categoriesInput: Portfolio_ProjectUpsertWithoutTech_categoriesInput;
  Portfolio_ProjectUpdateWithoutTech_categoriesInput: Portfolio_ProjectUpdateWithoutTech_categoriesInput;
  Portfolio_TechCategoryCreateInput: Portfolio_TechCategoryCreateInput;
  Portfolio_TechCategoryUpdateInput: Portfolio_TechCategoryUpdateInput;
  Portfolio_LoginReturnType: Portfolio_LoginReturnType;
  Portfolio_LoginInputType: Portfolio_LoginInputType;
  Portfolio_AdminCreateInput: Portfolio_AdminCreateInput;
  Portfolio_AdminUpdateInput: Portfolio_AdminUpdateInput;
  Portfolio_Upload: Scalars['Portfolio_Upload'];
  Portfolio: Portfolio;
  Query: {};
  StringQueryOperatorInput: StringQueryOperatorInput;
  IntQueryOperatorInput: IntQueryOperatorInput;
  DateQueryOperatorInput: DateQueryOperatorInput;
  FloatQueryOperatorInput: FloatQueryOperatorInput;
  ImageSharpFilterListInput: ImageSharpFilterListInput;
  ImageSharpFilterInput: ImageSharpFilterInput;
  ImageSharpFixedFilterInput: ImageSharpFixedFilterInput;
  ImageSharpFluidFilterInput: ImageSharpFluidFilterInput;
  JSONQueryOperatorInput: JSONQueryOperatorInput;
  ImageSharpOriginalFilterInput: ImageSharpOriginalFilterInput;
  ImageSharpResizeFilterInput: ImageSharpResizeFilterInput;
  NodeFilterInput: NodeFilterInput;
  NodeFilterListInput: NodeFilterListInput;
  InternalFilterInput: InternalFilterInput;
  BooleanQueryOperatorInput: BooleanQueryOperatorInput;
  FileConnection: FileConnection;
  FileEdge: FileEdge;
  PageInfo: PageInfo;
  FileGroupConnection: FileGroupConnection;
  FileFilterInput: FileFilterInput;
  FileSortInput: FileSortInput;
  DirectoryConnection: DirectoryConnection;
  DirectoryEdge: DirectoryEdge;
  DirectoryGroupConnection: DirectoryGroupConnection;
  DirectoryFilterInput: DirectoryFilterInput;
  DirectorySortInput: DirectorySortInput;
  SiteSiteMetadataFilterInput: SiteSiteMetadataFilterInput;
  SiteConnection: SiteConnection;
  SiteEdge: SiteEdge;
  SiteGroupConnection: SiteGroupConnection;
  SiteFilterInput: SiteFilterInput;
  SiteSortInput: SiteSortInput;
  SiteFunctionConnection: SiteFunctionConnection;
  SiteFunctionEdge: SiteFunctionEdge;
  SiteFunctionGroupConnection: SiteFunctionGroupConnection;
  SiteFunctionFilterInput: SiteFunctionFilterInput;
  SiteFunctionSortInput: SiteFunctionSortInput;
  SitePageContextFilterInput: SitePageContextFilterInput;
  SitePageContextProjectFilterInput: SitePageContextProjectFilterInput;
  SitePluginFilterInput: SitePluginFilterInput;
  SitePluginPluginOptionsFilterInput: SitePluginPluginOptionsFilterInput;
  SitePluginPluginOptionsEmitSchemaFilterInput: SitePluginPluginOptionsEmitSchemaFilterInput;
  SitePluginPluginOptionsEmitPluginDocumentsFilterInput: SitePluginPluginOptionsEmitPluginDocumentsFilterInput;
  SitePluginPackageJsonFilterInput: SitePluginPackageJsonFilterInput;
  SitePluginPackageJsonDependenciesFilterListInput: SitePluginPackageJsonDependenciesFilterListInput;
  SitePluginPackageJsonDependenciesFilterInput: SitePluginPackageJsonDependenciesFilterInput;
  SitePluginPackageJsonDevDependenciesFilterListInput: SitePluginPackageJsonDevDependenciesFilterListInput;
  SitePluginPackageJsonDevDependenciesFilterInput: SitePluginPackageJsonDevDependenciesFilterInput;
  SitePluginPackageJsonPeerDependenciesFilterListInput: SitePluginPackageJsonPeerDependenciesFilterListInput;
  SitePluginPackageJsonPeerDependenciesFilterInput: SitePluginPackageJsonPeerDependenciesFilterInput;
  SitePageConnection: SitePageConnection;
  SitePageEdge: SitePageEdge;
  SitePageGroupConnection: SitePageGroupConnection;
  SitePageFilterInput: SitePageFilterInput;
  SitePageSortInput: SitePageSortInput;
  ImageSharpConnection: ImageSharpConnection;
  ImageSharpEdge: ImageSharpEdge;
  ImageSharpGroupConnection: ImageSharpGroupConnection;
  ImageSharpSortInput: ImageSharpSortInput;
  SitePluginConnection: SitePluginConnection;
  SitePluginEdge: SitePluginEdge;
  SitePluginGroupConnection: SitePluginGroupConnection;
  SitePluginSortInput: SitePluginSortInput;
  SiteBuildMetadataConnection: SiteBuildMetadataConnection;
  SiteBuildMetadataEdge: SiteBuildMetadataEdge;
  SiteBuildMetadataGroupConnection: SiteBuildMetadataGroupConnection;
  SiteBuildMetadataFilterInput: SiteBuildMetadataFilterInput;
  SiteBuildMetadataSortInput: SiteBuildMetadataSortInput;
  GraphQLSourceConnection: GraphQLSourceConnection;
  GraphQLSourceEdge: GraphQLSourceEdge;
  GraphQLSourceGroupConnection: GraphQLSourceGroupConnection;
  GraphQLSourceFilterInput: GraphQLSourceFilterInput;
  GraphQLSourceSortInput: GraphQLSourceSortInput;
};

export type dateformatDirectiveArgs = {   formatString?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>; };

export type dateformatDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = dateformatDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type linkDirectiveArgs = {   by?: Scalars['String'];
  from?: Maybe<Scalars['String']>;
  on?: Maybe<Scalars['String']>; };

export type linkDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = linkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type fileByRelativePathDirectiveArgs = {   from?: Maybe<Scalars['String']>; };

export type fileByRelativePathDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = fileByRelativePathDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type proxyDirectiveArgs = {   from: Scalars['String'];
  fromNode?: Scalars['Boolean']; };

export type proxyDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = proxyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type inferDirectiveArgs = {  };

export type inferDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = inferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type dontInferDirectiveArgs = {  };

export type dontInferDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = dontInferDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type mimeTypesDirectiveArgs = {   types?: Array<Scalars['String']>; };

export type mimeTypesDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = mimeTypesDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type childOfDirectiveArgs = {   mimeTypes?: Array<Scalars['String']>;
  types?: Array<Scalars['String']>; };

export type childOfDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = childOfDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type nodeInterfaceDirectiveArgs = {  };

export type nodeInterfaceDirectiveResolver<Result, Parent, ContextType = GatsbyResolverContext, Args = nodeInterfaceDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FileResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_modifiedTimeArgs, never>>;
  accessTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_accessTimeArgs, never>>;
  changeTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_changeTimeArgs, never>>;
  birthTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_birthTimeArgs, never>>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_atimeArgs, never>>;
  mtime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_mtimeArgs, never>>;
  ctime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<File_ctimeArgs, never>>;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  publicURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childrenImageSharp?: Resolver<Maybe<Array<Maybe<ResolversTypes['ImageSharp']>>>, ParentType, ContextType>;
  childImageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NodeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'File' | 'Directory' | 'Site' | 'SiteFunction' | 'SitePage' | 'ImageSharp' | 'SitePlugin' | 'SiteBuildMetadata' | 'GraphQLSource', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
};

export type InternalResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Internal'] = ResolversParentTypes['Internal']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentDigest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldOwners?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ignoreType?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mediaType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DirectoryResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Directory'] = ResolversParentTypes['Directory']> = {
  sourceInstanceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absolutePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  extension?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  prettySize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_modifiedTimeArgs, never>>;
  accessTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_accessTimeArgs, never>>;
  changeTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_changeTimeArgs, never>>;
  birthTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_birthTimeArgs, never>>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dir?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  base?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ext?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeDirectory?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nlink?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  gid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rdev?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ino?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  mtimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  ctimeMs?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  atime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_atimeArgs, never>>;
  mtime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_mtimeArgs, never>>;
  ctime?: Resolver<ResolversTypes['Date'], ParentType, ContextType, RequireFields<Directory_ctimeArgs, never>>;
  birthtime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  birthtimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blksize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blocks?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  buildTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<Site_buildTimeArgs, never>>;
  siteMetadata?: Resolver<Maybe<ResolversTypes['SiteSiteMetadata']>, ParentType, ContextType>;
  port?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  host?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  polyfill?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pathPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteSiteMetadataResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteSiteMetadata'] = ResolversParentTypes['SiteSiteMetadata']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  siteUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteFunction'] = ResolversParentTypes['SiteFunction']> = {
  functionRoute?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pluginName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalAbsoluteFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalRelativeFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  relativeCompiledFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  absoluteCompiledFilePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePage'] = ResolversParentTypes['SitePage']> = {
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  component?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  internalComponentName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  componentChunkName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  matchPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  isCreatedByStatefulCreatePages?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  context?: Resolver<Maybe<ResolversTypes['SitePageContext']>, ParentType, ContextType>;
  pluginCreator?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pluginCreatorId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageContextResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePageContext'] = ResolversParentTypes['SitePageContext']> = {
  project?: Resolver<Maybe<ResolversTypes['SitePageContextProject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageContextProjectResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePageContextProject'] = ResolversParentTypes['SitePageContextProject']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageFormatResolvers = { NO_CHANGE: 'undefined', AUTO: 'undefined', JPG: 'jpg', PNG: 'png', WEBP: 'webp', AVIF: 'avif' };

export type ImageFitResolvers = { COVER: 'cover', CONTAIN: 'contain', FILL: 'fill', INSIDE: 'inside', OUTSIDE: 'outside' };

export type ImageLayoutResolvers = { FIXED: 'fixed', FULL_WIDTH: 'fullWidth', CONSTRAINED: 'constrained' };

export type ImageCropFocusResolvers = { CENTER: 'undefined', NORTH: 1, NORTHEAST: 5, EAST: 2, SOUTHEAST: 6, SOUTH: 3, SOUTHWEST: 7, WEST: 4, NORTHWEST: 8, ENTROPY: 16, ATTENTION: 17 };

export type PotraceTurnPolicyResolvers = { TURNPOLICY_BLACK: 'black', TURNPOLICY_WHITE: 'white', TURNPOLICY_LEFT: 'left', TURNPOLICY_RIGHT: 'right', TURNPOLICY_MINORITY: 'minority', TURNPOLICY_MAJORITY: 'majority' };

export type ImageSharpResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharp'] = ResolversParentTypes['ImageSharp']> = {
  fixed?: Resolver<Maybe<ResolversTypes['ImageSharpFixed']>, ParentType, ContextType, RequireFields<ImageSharp_fixedArgs, 'jpegProgressive' | 'pngCompressionSpeed' | 'grayscale' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim'>>;
  fluid?: Resolver<Maybe<ResolversTypes['ImageSharpFluid']>, ParentType, ContextType, RequireFields<ImageSharp_fluidArgs, 'grayscale' | 'jpegProgressive' | 'pngCompressionSpeed' | 'toFormat' | 'toFormatBase64' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim' | 'sizes' | 'srcSetBreakpoints'>>;
  gatsbyImageData?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<ImageSharp_gatsbyImageDataArgs, 'layout'>>;
  original?: Resolver<Maybe<ResolversTypes['ImageSharpOriginal']>, ParentType, ContextType>;
  resize?: Resolver<Maybe<ResolversTypes['ImageSharpResize']>, ParentType, ContextType, RequireFields<ImageSharp_resizeArgs, 'jpegProgressive' | 'pngCompressionLevel' | 'pngCompressionSpeed' | 'grayscale' | 'base64' | 'toFormat' | 'cropFocus' | 'fit' | 'background' | 'rotate' | 'trim'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFixedResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpFixed'] = ResolversParentTypes['ImageSharpFixed']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFluidResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpFluid'] = ResolversParentTypes['ImageSharpFluid']> = {
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  aspectRatio?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcSet?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  srcWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srcSetWebp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sizes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presentationWidth?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  presentationHeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type ImagePlaceholderResolvers = { DOMINANT_COLOR: 'dominantColor', TRACED_SVG: 'tracedSVG', BLURRED: 'blurred', NONE: 'none' };

export type ImageSharpOriginalResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpOriginal'] = ResolversParentTypes['ImageSharpOriginal']> = {
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpResizeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpResize'] = ResolversParentTypes['ImageSharpResize']> = {
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tracedSVG?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  originalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePlugin'] = ResolversParentTypes['SitePlugin']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  resolve?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pluginOptions?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptions']>, ParentType, ContextType>;
  nodeAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  browserAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  ssrAPIs?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pluginFilepath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  packageJson?: Resolver<Maybe<ResolversTypes['SitePluginPackageJson']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginPluginOptions'] = ResolversParentTypes['SitePluginPluginOptions']> = {
  base64Width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stripMetadata?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  defaultQuality?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  failOnError?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  autoFix?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  includeResolvers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  outputPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emitSchema?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsEmitSchema']>, ParentType, ContextType>;
  emitPluginDocuments?: Resolver<Maybe<ResolversTypes['SitePluginPluginOptionsEmitPluginDocuments']>, ParentType, ContextType>;
  specialChars?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isTSX?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  jsxPragma?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allExtensions?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  typeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pathCheck?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsEmitSchemaResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginPluginOptionsEmitSchema'] = ResolversParentTypes['SitePluginPluginOptionsEmitSchema']> = {
  _xsrcxxxgeneratedxxxgatsbyxschemaxgraphql?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  _xsrcxxxgeneratedxxxgatsbyxintrospectionxjson?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPluginOptionsEmitPluginDocumentsResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginPluginOptionsEmitPluginDocuments'] = ResolversParentTypes['SitePluginPluginOptionsEmitPluginDocuments']> = {
  src___generated___gatsby_plugin_documents_graphql?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginPackageJson'] = ResolversParentTypes['SitePluginPackageJson']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  main?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonDependencies']>>>, ParentType, ContextType>;
  devDependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonDevDependencies']>>>, ParentType, ContextType>;
  peerDependencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['SitePluginPackageJsonPeerDependencies']>>>, ParentType, ContextType>;
  keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonDependenciesResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginPackageJsonDependencies'] = ResolversParentTypes['SitePluginPackageJsonDependencies']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonDevDependenciesResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginPackageJsonDevDependencies'] = ResolversParentTypes['SitePluginPackageJsonDevDependencies']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginPackageJsonPeerDependenciesResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginPackageJsonPeerDependencies'] = ResolversParentTypes['SitePluginPackageJsonPeerDependencies']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteBuildMetadata'] = ResolversParentTypes['SiteBuildMetadata']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  buildTime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType, RequireFields<SiteBuildMetadata_buildTimeArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLSourceResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['GraphQLSource'] = ResolversParentTypes['GraphQLSource']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Node']>, ParentType, ContextType>;
  internal?: Resolver<ResolversTypes['Internal'], ParentType, ContextType>;
  typeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fieldName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_AboutResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_About'] = ResolversParentTypes['Portfolio_About']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  admin_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Portfolio_DateTime'], ParentType, ContextType>;
  admin?: Resolver<ResolversTypes['Portfolio_Admin'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Portfolio_DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Portfolio_DateTime'], any> {
  name: 'Portfolio_DateTime';
}

export type Portfolio_AdminResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_Admin'] = ResolversParentTypes['Portfolio_Admin']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  linkedIn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  whatsapp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  instagram?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  github?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  heroImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  resumes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  confirmed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Portfolio_DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Portfolio_DateTime'], ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['Portfolio_AdminCount']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_AdminCountResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_AdminCount'] = ResolversParentTypes['Portfolio_AdminCount']> = {
  about?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  messages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projects?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_AnswerResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_Answer'] = ResolversParentTypes['Portfolio_Answer']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['Portfolio_Question']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_QuestionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_Question'] = ResolversParentTypes['Portfolio_Question']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answer_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answer?: Resolver<ResolversTypes['Portfolio_Answer'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Portfolio_Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_ProjectResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_Project'] = ResolversParentTypes['Portfolio_Project']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  github_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  app_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  admin_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Portfolio_DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Portfolio_DateTime'], ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['Portfolio_ProjectCount']>, ParentType, ContextType>;
  tech_categories?: Resolver<Array<ResolversTypes['Portfolio_TechCategory']>, ParentType, ContextType, RequireFields<Portfolio_Project_tech_categoriesArgs, never>>;
  questions?: Resolver<Array<ResolversTypes['Portfolio_Question']>, ParentType, ContextType, RequireFields<Portfolio_Project_questionsArgs, never>>;
  sketches?: Resolver<Array<ResolversTypes['Portfolio_Sketch']>, ParentType, ContextType, RequireFields<Portfolio_Project_sketchesArgs, never>>;
  admin?: Resolver<ResolversTypes['Portfolio_Admin'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_ProjectCountResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_ProjectCount'] = ResolversParentTypes['Portfolio_ProjectCount']> = {
  tech_categories?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  questions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sketches?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_TechCategoryResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_TechCategory'] = ResolversParentTypes['Portfolio_TechCategory']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _count?: Resolver<Maybe<ResolversTypes['Portfolio_TechCategoryCount']>, ParentType, ContextType>;
  techs?: Resolver<Array<ResolversTypes['Portfolio_Tech']>, ParentType, ContextType, RequireFields<Portfolio_TechCategory_techsArgs, never>>;
  project?: Resolver<ResolversTypes['Portfolio_Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_TechCategoryCountResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_TechCategoryCount'] = ResolversParentTypes['Portfolio_TechCategoryCount']> = {
  techs?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_TechResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_Tech'] = ResolversParentTypes['Portfolio_Tech']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tech_category_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tech_categories?: Resolver<ResolversTypes['Portfolio_TechCategory'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_SketchResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_Sketch'] = ResolversParentTypes['Portfolio_Sketch']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  download_link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Portfolio_Project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_MessageResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_Message'] = ResolversParentTypes['Portfolio_Message']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  read_status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  answer_status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  admin_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answeredAt?: Resolver<ResolversTypes['Portfolio_DateTime'], ParentType, ContextType>;
  createdAd?: Resolver<ResolversTypes['Portfolio_DateTime'], ParentType, ContextType>;
  admin?: Resolver<ResolversTypes['Portfolio_Admin'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_AffectedRowsOutputResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_AffectedRowsOutput'] = ResolversParentTypes['Portfolio_AffectedRowsOutput']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Portfolio_LoginReturnTypeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio_LoginReturnType'] = ResolversParentTypes['Portfolio_LoginReturnType']> = {
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Portfolio_UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Portfolio_Upload'], any> {
  name: 'Portfolio_Upload';
}

export type PortfolioResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Portfolio'] = ResolversParentTypes['Portfolio']> = {
  about?: Resolver<Maybe<ResolversTypes['Portfolio_About']>, ParentType, ContextType, RequireFields<Portfolio_aboutArgs, 'where'>>;
  abouts?: Resolver<Array<ResolversTypes['Portfolio_About']>, ParentType, ContextType, RequireFields<Portfolio_aboutsArgs, never>>;
  answer?: Resolver<Maybe<ResolversTypes['Portfolio_Answer']>, ParentType, ContextType, RequireFields<Portfolio_answerArgs, 'where'>>;
  answers?: Resolver<Array<ResolversTypes['Portfolio_Answer']>, ParentType, ContextType, RequireFields<Portfolio_answersArgs, never>>;
  message?: Resolver<Maybe<ResolversTypes['Portfolio_Message']>, ParentType, ContextType, RequireFields<Portfolio_messageArgs, 'where'>>;
  messages?: Resolver<Array<ResolversTypes['Portfolio_Message']>, ParentType, ContextType, RequireFields<Portfolio_messagesArgs, never>>;
  project?: Resolver<Maybe<ResolversTypes['Portfolio_Project']>, ParentType, ContextType, RequireFields<Portfolio_projectArgs, 'where'>>;
  projects?: Resolver<Array<ResolversTypes['Portfolio_Project']>, ParentType, ContextType, RequireFields<Portfolio_projectsArgs, never>>;
  question?: Resolver<Maybe<ResolversTypes['Portfolio_Question']>, ParentType, ContextType, RequireFields<Portfolio_questionArgs, 'where'>>;
  questions?: Resolver<Array<ResolversTypes['Portfolio_Question']>, ParentType, ContextType, RequireFields<Portfolio_questionsArgs, never>>;
  sketch?: Resolver<Maybe<ResolversTypes['Portfolio_Sketch']>, ParentType, ContextType, RequireFields<Portfolio_sketchArgs, 'where'>>;
  sketches?: Resolver<Array<ResolversTypes['Portfolio_Sketch']>, ParentType, ContextType, RequireFields<Portfolio_sketchesArgs, never>>;
  tech?: Resolver<Maybe<ResolversTypes['Portfolio_Tech']>, ParentType, ContextType, RequireFields<Portfolio_techArgs, 'where'>>;
  teches?: Resolver<Array<ResolversTypes['Portfolio_Tech']>, ParentType, ContextType, RequireFields<Portfolio_techesArgs, never>>;
  techCategory?: Resolver<Maybe<ResolversTypes['Portfolio_TechCategory']>, ParentType, ContextType, RequireFields<Portfolio_techCategoryArgs, 'where'>>;
  techCategories?: Resolver<Array<ResolversTypes['Portfolio_TechCategory']>, ParentType, ContextType, RequireFields<Portfolio_techCategoriesArgs, never>>;
  isThereAnAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['Portfolio_Admin']>, ParentType, ContextType>;
  getAdmin?: Resolver<ResolversTypes['Portfolio_Admin'], ParentType, ContextType>;
  getNumOfAdmins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  file?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType, RequireFields<Query_fileArgs, never>>;
  allFile?: Resolver<ResolversTypes['FileConnection'], ParentType, ContextType, RequireFields<Query_allFileArgs, never>>;
  directory?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType, RequireFields<Query_directoryArgs, never>>;
  allDirectory?: Resolver<ResolversTypes['DirectoryConnection'], ParentType, ContextType, RequireFields<Query_allDirectoryArgs, never>>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType, RequireFields<Query_siteArgs, never>>;
  allSite?: Resolver<ResolversTypes['SiteConnection'], ParentType, ContextType, RequireFields<Query_allSiteArgs, never>>;
  siteFunction?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType, RequireFields<Query_siteFunctionArgs, never>>;
  allSiteFunction?: Resolver<ResolversTypes['SiteFunctionConnection'], ParentType, ContextType, RequireFields<Query_allSiteFunctionArgs, never>>;
  sitePage?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType, RequireFields<Query_sitePageArgs, never>>;
  allSitePage?: Resolver<ResolversTypes['SitePageConnection'], ParentType, ContextType, RequireFields<Query_allSitePageArgs, never>>;
  imageSharp?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType, RequireFields<Query_imageSharpArgs, never>>;
  allImageSharp?: Resolver<ResolversTypes['ImageSharpConnection'], ParentType, ContextType, RequireFields<Query_allImageSharpArgs, never>>;
  sitePlugin?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType, RequireFields<Query_sitePluginArgs, never>>;
  allSitePlugin?: Resolver<ResolversTypes['SitePluginConnection'], ParentType, ContextType, RequireFields<Query_allSitePluginArgs, never>>;
  siteBuildMetadata?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType, RequireFields<Query_siteBuildMetadataArgs, never>>;
  allSiteBuildMetadata?: Resolver<ResolversTypes['SiteBuildMetadataConnection'], ParentType, ContextType, RequireFields<Query_allSiteBuildMetadataArgs, never>>;
  graphQlSource?: Resolver<Maybe<ResolversTypes['GraphQLSource']>, ParentType, ContextType, RequireFields<Query_graphQlSourceArgs, never>>;
  allGraphQlSource?: Resolver<ResolversTypes['GraphQLSourceConnection'], ParentType, ContextType, RequireFields<Query_allGraphQlSourceArgs, never>>;
  portfolio?: Resolver<ResolversTypes['Portfolio'], ParentType, ContextType>;
};

export type FileConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['FileConnection'] = ResolversParentTypes['FileConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<FileConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<FileConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['FileGroupConnection']>, ParentType, ContextType, RequireFields<FileConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['FileEdge'] = ResolversParentTypes['FileEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  currentPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileFieldsEnumResolvers = { sourceInstanceName: 'undefined', absolutePath: 'undefined', relativePath: 'undefined', extension: 'undefined', size: 'undefined', prettySize: 'undefined', modifiedTime: 'undefined', accessTime: 'undefined', changeTime: 'undefined', birthTime: 'undefined', root: 'undefined', dir: 'undefined', base: 'undefined', ext: 'undefined', name: 'undefined', relativeDirectory: 'undefined', dev: 'undefined', mode: 'undefined', nlink: 'undefined', uid: 'undefined', gid: 'undefined', rdev: 'undefined', ino: 'undefined', atimeMs: 'undefined', mtimeMs: 'undefined', ctimeMs: 'undefined', atime: 'undefined', mtime: 'undefined', ctime: 'undefined', birthtime: 'undefined', birthtimeMs: 'undefined', blksize: 'undefined', blocks: 'undefined', publicURL: 'undefined', childrenImageSharp: 'undefined', childrenImageSharp___fixed___base64: 'childrenImageSharp.fixed.base64', childrenImageSharp___fixed___tracedSVG: 'childrenImageSharp.fixed.tracedSVG', childrenImageSharp___fixed___aspectRatio: 'childrenImageSharp.fixed.aspectRatio', childrenImageSharp___fixed___width: 'childrenImageSharp.fixed.width', childrenImageSharp___fixed___height: 'childrenImageSharp.fixed.height', childrenImageSharp___fixed___src: 'childrenImageSharp.fixed.src', childrenImageSharp___fixed___srcSet: 'childrenImageSharp.fixed.srcSet', childrenImageSharp___fixed___srcWebp: 'childrenImageSharp.fixed.srcWebp', childrenImageSharp___fixed___srcSetWebp: 'childrenImageSharp.fixed.srcSetWebp', childrenImageSharp___fixed___originalName: 'childrenImageSharp.fixed.originalName', childrenImageSharp___fluid___base64: 'childrenImageSharp.fluid.base64', childrenImageSharp___fluid___tracedSVG: 'childrenImageSharp.fluid.tracedSVG', childrenImageSharp___fluid___aspectRatio: 'childrenImageSharp.fluid.aspectRatio', childrenImageSharp___fluid___src: 'childrenImageSharp.fluid.src', childrenImageSharp___fluid___srcSet: 'childrenImageSharp.fluid.srcSet', childrenImageSharp___fluid___srcWebp: 'childrenImageSharp.fluid.srcWebp', childrenImageSharp___fluid___srcSetWebp: 'childrenImageSharp.fluid.srcSetWebp', childrenImageSharp___fluid___sizes: 'childrenImageSharp.fluid.sizes', childrenImageSharp___fluid___originalImg: 'childrenImageSharp.fluid.originalImg', childrenImageSharp___fluid___originalName: 'childrenImageSharp.fluid.originalName', childrenImageSharp___fluid___presentationWidth: 'childrenImageSharp.fluid.presentationWidth', childrenImageSharp___fluid___presentationHeight: 'childrenImageSharp.fluid.presentationHeight', childrenImageSharp___gatsbyImageData: 'childrenImageSharp.gatsbyImageData', childrenImageSharp___original___width: 'childrenImageSharp.original.width', childrenImageSharp___original___height: 'childrenImageSharp.original.height', childrenImageSharp___original___src: 'childrenImageSharp.original.src', childrenImageSharp___resize___src: 'childrenImageSharp.resize.src', childrenImageSharp___resize___tracedSVG: 'childrenImageSharp.resize.tracedSVG', childrenImageSharp___resize___width: 'childrenImageSharp.resize.width', childrenImageSharp___resize___height: 'childrenImageSharp.resize.height', childrenImageSharp___resize___aspectRatio: 'childrenImageSharp.resize.aspectRatio', childrenImageSharp___resize___originalName: 'childrenImageSharp.resize.originalName', childrenImageSharp___id: 'childrenImageSharp.id', childrenImageSharp___parent___id: 'childrenImageSharp.parent.id', childrenImageSharp___parent___parent___id: 'childrenImageSharp.parent.parent.id', childrenImageSharp___parent___parent___children: 'childrenImageSharp.parent.parent.children', childrenImageSharp___parent___children: 'childrenImageSharp.parent.children', childrenImageSharp___parent___children___id: 'childrenImageSharp.parent.children.id', childrenImageSharp___parent___children___children: 'childrenImageSharp.parent.children.children', childrenImageSharp___parent___internal___content: 'childrenImageSharp.parent.internal.content', childrenImageSharp___parent___internal___contentDigest: 'childrenImageSharp.parent.internal.contentDigest', childrenImageSharp___parent___internal___description: 'childrenImageSharp.parent.internal.description', childrenImageSharp___parent___internal___fieldOwners: 'childrenImageSharp.parent.internal.fieldOwners', childrenImageSharp___parent___internal___ignoreType: 'childrenImageSharp.parent.internal.ignoreType', childrenImageSharp___parent___internal___mediaType: 'childrenImageSharp.parent.internal.mediaType', childrenImageSharp___parent___internal___owner: 'childrenImageSharp.parent.internal.owner', childrenImageSharp___parent___internal___type: 'childrenImageSharp.parent.internal.type', childrenImageSharp___children: 'childrenImageSharp.children', childrenImageSharp___children___id: 'childrenImageSharp.children.id', childrenImageSharp___children___parent___id: 'childrenImageSharp.children.parent.id', childrenImageSharp___children___parent___children: 'childrenImageSharp.children.parent.children', childrenImageSharp___children___children: 'childrenImageSharp.children.children', childrenImageSharp___children___children___id: 'childrenImageSharp.children.children.id', childrenImageSharp___children___children___children: 'childrenImageSharp.children.children.children', childrenImageSharp___children___internal___content: 'childrenImageSharp.children.internal.content', childrenImageSharp___children___internal___contentDigest: 'childrenImageSharp.children.internal.contentDigest', childrenImageSharp___children___internal___description: 'childrenImageSharp.children.internal.description', childrenImageSharp___children___internal___fieldOwners: 'childrenImageSharp.children.internal.fieldOwners', childrenImageSharp___children___internal___ignoreType: 'childrenImageSharp.children.internal.ignoreType', childrenImageSharp___children___internal___mediaType: 'childrenImageSharp.children.internal.mediaType', childrenImageSharp___children___internal___owner: 'childrenImageSharp.children.internal.owner', childrenImageSharp___children___internal___type: 'childrenImageSharp.children.internal.type', childrenImageSharp___internal___content: 'childrenImageSharp.internal.content', childrenImageSharp___internal___contentDigest: 'childrenImageSharp.internal.contentDigest', childrenImageSharp___internal___description: 'childrenImageSharp.internal.description', childrenImageSharp___internal___fieldOwners: 'childrenImageSharp.internal.fieldOwners', childrenImageSharp___internal___ignoreType: 'childrenImageSharp.internal.ignoreType', childrenImageSharp___internal___mediaType: 'childrenImageSharp.internal.mediaType', childrenImageSharp___internal___owner: 'childrenImageSharp.internal.owner', childrenImageSharp___internal___type: 'childrenImageSharp.internal.type', childImageSharp___fixed___base64: 'childImageSharp.fixed.base64', childImageSharp___fixed___tracedSVG: 'childImageSharp.fixed.tracedSVG', childImageSharp___fixed___aspectRatio: 'childImageSharp.fixed.aspectRatio', childImageSharp___fixed___width: 'childImageSharp.fixed.width', childImageSharp___fixed___height: 'childImageSharp.fixed.height', childImageSharp___fixed___src: 'childImageSharp.fixed.src', childImageSharp___fixed___srcSet: 'childImageSharp.fixed.srcSet', childImageSharp___fixed___srcWebp: 'childImageSharp.fixed.srcWebp', childImageSharp___fixed___srcSetWebp: 'childImageSharp.fixed.srcSetWebp', childImageSharp___fixed___originalName: 'childImageSharp.fixed.originalName', childImageSharp___fluid___base64: 'childImageSharp.fluid.base64', childImageSharp___fluid___tracedSVG: 'childImageSharp.fluid.tracedSVG', childImageSharp___fluid___aspectRatio: 'childImageSharp.fluid.aspectRatio', childImageSharp___fluid___src: 'childImageSharp.fluid.src', childImageSharp___fluid___srcSet: 'childImageSharp.fluid.srcSet', childImageSharp___fluid___srcWebp: 'childImageSharp.fluid.srcWebp', childImageSharp___fluid___srcSetWebp: 'childImageSharp.fluid.srcSetWebp', childImageSharp___fluid___sizes: 'childImageSharp.fluid.sizes', childImageSharp___fluid___originalImg: 'childImageSharp.fluid.originalImg', childImageSharp___fluid___originalName: 'childImageSharp.fluid.originalName', childImageSharp___fluid___presentationWidth: 'childImageSharp.fluid.presentationWidth', childImageSharp___fluid___presentationHeight: 'childImageSharp.fluid.presentationHeight', childImageSharp___gatsbyImageData: 'childImageSharp.gatsbyImageData', childImageSharp___original___width: 'childImageSharp.original.width', childImageSharp___original___height: 'childImageSharp.original.height', childImageSharp___original___src: 'childImageSharp.original.src', childImageSharp___resize___src: 'childImageSharp.resize.src', childImageSharp___resize___tracedSVG: 'childImageSharp.resize.tracedSVG', childImageSharp___resize___width: 'childImageSharp.resize.width', childImageSharp___resize___height: 'childImageSharp.resize.height', childImageSharp___resize___aspectRatio: 'childImageSharp.resize.aspectRatio', childImageSharp___resize___originalName: 'childImageSharp.resize.originalName', childImageSharp___id: 'childImageSharp.id', childImageSharp___parent___id: 'childImageSharp.parent.id', childImageSharp___parent___parent___id: 'childImageSharp.parent.parent.id', childImageSharp___parent___parent___children: 'childImageSharp.parent.parent.children', childImageSharp___parent___children: 'childImageSharp.parent.children', childImageSharp___parent___children___id: 'childImageSharp.parent.children.id', childImageSharp___parent___children___children: 'childImageSharp.parent.children.children', childImageSharp___parent___internal___content: 'childImageSharp.parent.internal.content', childImageSharp___parent___internal___contentDigest: 'childImageSharp.parent.internal.contentDigest', childImageSharp___parent___internal___description: 'childImageSharp.parent.internal.description', childImageSharp___parent___internal___fieldOwners: 'childImageSharp.parent.internal.fieldOwners', childImageSharp___parent___internal___ignoreType: 'childImageSharp.parent.internal.ignoreType', childImageSharp___parent___internal___mediaType: 'childImageSharp.parent.internal.mediaType', childImageSharp___parent___internal___owner: 'childImageSharp.parent.internal.owner', childImageSharp___parent___internal___type: 'childImageSharp.parent.internal.type', childImageSharp___children: 'childImageSharp.children', childImageSharp___children___id: 'childImageSharp.children.id', childImageSharp___children___parent___id: 'childImageSharp.children.parent.id', childImageSharp___children___parent___children: 'childImageSharp.children.parent.children', childImageSharp___children___children: 'childImageSharp.children.children', childImageSharp___children___children___id: 'childImageSharp.children.children.id', childImageSharp___children___children___children: 'childImageSharp.children.children.children', childImageSharp___children___internal___content: 'childImageSharp.children.internal.content', childImageSharp___children___internal___contentDigest: 'childImageSharp.children.internal.contentDigest', childImageSharp___children___internal___description: 'childImageSharp.children.internal.description', childImageSharp___children___internal___fieldOwners: 'childImageSharp.children.internal.fieldOwners', childImageSharp___children___internal___ignoreType: 'childImageSharp.children.internal.ignoreType', childImageSharp___children___internal___mediaType: 'childImageSharp.children.internal.mediaType', childImageSharp___children___internal___owner: 'childImageSharp.children.internal.owner', childImageSharp___children___internal___type: 'childImageSharp.children.internal.type', childImageSharp___internal___content: 'childImageSharp.internal.content', childImageSharp___internal___contentDigest: 'childImageSharp.internal.contentDigest', childImageSharp___internal___description: 'childImageSharp.internal.description', childImageSharp___internal___fieldOwners: 'childImageSharp.internal.fieldOwners', childImageSharp___internal___ignoreType: 'childImageSharp.internal.ignoreType', childImageSharp___internal___mediaType: 'childImageSharp.internal.mediaType', childImageSharp___internal___owner: 'childImageSharp.internal.owner', childImageSharp___internal___type: 'childImageSharp.internal.type', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type FileGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['FileGroupConnection'] = ResolversParentTypes['FileGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['FileEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['File']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['DirectoryConnection'] = ResolversParentTypes['DirectoryConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<DirectoryConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<DirectoryConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['DirectoryGroupConnection']>, ParentType, ContextType, RequireFields<DirectoryConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['DirectoryEdge'] = ResolversParentTypes['DirectoryEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Directory'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Directory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DirectoryFieldsEnumResolvers = { sourceInstanceName: 'undefined', absolutePath: 'undefined', relativePath: 'undefined', extension: 'undefined', size: 'undefined', prettySize: 'undefined', modifiedTime: 'undefined', accessTime: 'undefined', changeTime: 'undefined', birthTime: 'undefined', root: 'undefined', dir: 'undefined', base: 'undefined', ext: 'undefined', name: 'undefined', relativeDirectory: 'undefined', dev: 'undefined', mode: 'undefined', nlink: 'undefined', uid: 'undefined', gid: 'undefined', rdev: 'undefined', ino: 'undefined', atimeMs: 'undefined', mtimeMs: 'undefined', ctimeMs: 'undefined', atime: 'undefined', mtime: 'undefined', ctime: 'undefined', birthtime: 'undefined', birthtimeMs: 'undefined', blksize: 'undefined', blocks: 'undefined', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type DirectoryGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['DirectoryGroupConnection'] = ResolversParentTypes['DirectoryGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['DirectoryEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Directory']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteConnection'] = ResolversParentTypes['SiteConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteGroupConnection']>, ParentType, ContextType, RequireFields<SiteConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteEdge'] = ResolversParentTypes['SiteEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Site'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFieldsEnumResolvers = { buildTime: 'undefined', siteMetadata___title: 'siteMetadata.title', siteMetadata___description: 'siteMetadata.description', siteMetadata___author: 'siteMetadata.author', siteMetadata___siteUrl: 'siteMetadata.siteUrl', port: 'undefined', host: 'undefined', polyfill: 'undefined', pathPrefix: 'undefined', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type SiteGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteGroupConnection'] = ResolversParentTypes['SiteGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Site']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteFunctionConnection'] = ResolversParentTypes['SiteFunctionConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteFunctionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteFunctionGroupConnection']>, ParentType, ContextType, RequireFields<SiteFunctionConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteFunctionEdge'] = ResolversParentTypes['SiteFunctionEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SiteFunction'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteFunctionFieldsEnumResolvers = { functionRoute: 'undefined', pluginName: 'undefined', originalAbsoluteFilePath: 'undefined', originalRelativeFilePath: 'undefined', relativeCompiledFilePath: 'undefined', absoluteCompiledFilePath: 'undefined', matchPath: 'undefined', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type SiteFunctionGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteFunctionGroupConnection'] = ResolversParentTypes['SiteFunctionGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteFunctionEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteFunction']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePageConnection'] = ResolversParentTypes['SitePageConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePageConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePageConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePageGroupConnection']>, ParentType, ContextType, RequireFields<SitePageConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePageEdge'] = ResolversParentTypes['SitePageEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePage'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePageFieldsEnumResolvers = { path: 'undefined', component: 'undefined', internalComponentName: 'undefined', componentChunkName: 'undefined', matchPath: 'undefined', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type', isCreatedByStatefulCreatePages: 'undefined', context___project___id: 'context.project.id', pluginCreator___id: 'pluginCreator.id', pluginCreator___parent___id: 'pluginCreator.parent.id', pluginCreator___parent___parent___id: 'pluginCreator.parent.parent.id', pluginCreator___parent___parent___children: 'pluginCreator.parent.parent.children', pluginCreator___parent___children: 'pluginCreator.parent.children', pluginCreator___parent___children___id: 'pluginCreator.parent.children.id', pluginCreator___parent___children___children: 'pluginCreator.parent.children.children', pluginCreator___parent___internal___content: 'pluginCreator.parent.internal.content', pluginCreator___parent___internal___contentDigest: 'pluginCreator.parent.internal.contentDigest', pluginCreator___parent___internal___description: 'pluginCreator.parent.internal.description', pluginCreator___parent___internal___fieldOwners: 'pluginCreator.parent.internal.fieldOwners', pluginCreator___parent___internal___ignoreType: 'pluginCreator.parent.internal.ignoreType', pluginCreator___parent___internal___mediaType: 'pluginCreator.parent.internal.mediaType', pluginCreator___parent___internal___owner: 'pluginCreator.parent.internal.owner', pluginCreator___parent___internal___type: 'pluginCreator.parent.internal.type', pluginCreator___children: 'pluginCreator.children', pluginCreator___children___id: 'pluginCreator.children.id', pluginCreator___children___parent___id: 'pluginCreator.children.parent.id', pluginCreator___children___parent___children: 'pluginCreator.children.parent.children', pluginCreator___children___children: 'pluginCreator.children.children', pluginCreator___children___children___id: 'pluginCreator.children.children.id', pluginCreator___children___children___children: 'pluginCreator.children.children.children', pluginCreator___children___internal___content: 'pluginCreator.children.internal.content', pluginCreator___children___internal___contentDigest: 'pluginCreator.children.internal.contentDigest', pluginCreator___children___internal___description: 'pluginCreator.children.internal.description', pluginCreator___children___internal___fieldOwners: 'pluginCreator.children.internal.fieldOwners', pluginCreator___children___internal___ignoreType: 'pluginCreator.children.internal.ignoreType', pluginCreator___children___internal___mediaType: 'pluginCreator.children.internal.mediaType', pluginCreator___children___internal___owner: 'pluginCreator.children.internal.owner', pluginCreator___children___internal___type: 'pluginCreator.children.internal.type', pluginCreator___internal___content: 'pluginCreator.internal.content', pluginCreator___internal___contentDigest: 'pluginCreator.internal.contentDigest', pluginCreator___internal___description: 'pluginCreator.internal.description', pluginCreator___internal___fieldOwners: 'pluginCreator.internal.fieldOwners', pluginCreator___internal___ignoreType: 'pluginCreator.internal.ignoreType', pluginCreator___internal___mediaType: 'pluginCreator.internal.mediaType', pluginCreator___internal___owner: 'pluginCreator.internal.owner', pluginCreator___internal___type: 'pluginCreator.internal.type', pluginCreator___resolve: 'pluginCreator.resolve', pluginCreator___name: 'pluginCreator.name', pluginCreator___version: 'pluginCreator.version', pluginCreator___pluginOptions___base64Width: 'pluginCreator.pluginOptions.base64Width', pluginCreator___pluginOptions___stripMetadata: 'pluginCreator.pluginOptions.stripMetadata', pluginCreator___pluginOptions___defaultQuality: 'pluginCreator.pluginOptions.defaultQuality', pluginCreator___pluginOptions___failOnError: 'pluginCreator.pluginOptions.failOnError', pluginCreator___pluginOptions___autoFix: 'pluginCreator.pluginOptions.autoFix', pluginCreator___pluginOptions___language: 'pluginCreator.pluginOptions.language', pluginCreator___pluginOptions___includeResolvers: 'pluginCreator.pluginOptions.includeResolvers', pluginCreator___pluginOptions___outputPath: 'pluginCreator.pluginOptions.outputPath', pluginCreator___pluginOptions___emitSchema____xsrcxxxgeneratedxxxgatsbyxschemaxgraphql: 'pluginCreator.pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxschemaxgraphql', pluginCreator___pluginOptions___emitSchema____xsrcxxxgeneratedxxxgatsbyxintrospectionxjson: 'pluginCreator.pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxintrospectionxjson', pluginCreator___pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql: 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql', pluginCreator___pluginOptions___specialChars: 'pluginCreator.pluginOptions.specialChars', pluginCreator___pluginOptions___name: 'pluginCreator.pluginOptions.name', pluginCreator___pluginOptions___path: 'pluginCreator.pluginOptions.path', pluginCreator___pluginOptions___isTSX: 'pluginCreator.pluginOptions.isTSX', pluginCreator___pluginOptions___jsxPragma: 'pluginCreator.pluginOptions.jsxPragma', pluginCreator___pluginOptions___allExtensions: 'pluginCreator.pluginOptions.allExtensions', pluginCreator___pluginOptions___typeName: 'pluginCreator.pluginOptions.typeName', pluginCreator___pluginOptions___fieldName: 'pluginCreator.pluginOptions.fieldName', pluginCreator___pluginOptions___url: 'pluginCreator.pluginOptions.url', pluginCreator___pluginOptions___pathCheck: 'pluginCreator.pluginOptions.pathCheck', pluginCreator___nodeAPIs: 'pluginCreator.nodeAPIs', pluginCreator___browserAPIs: 'pluginCreator.browserAPIs', pluginCreator___ssrAPIs: 'pluginCreator.ssrAPIs', pluginCreator___pluginFilepath: 'pluginCreator.pluginFilepath', pluginCreator___packageJson___name: 'pluginCreator.packageJson.name', pluginCreator___packageJson___description: 'pluginCreator.packageJson.description', pluginCreator___packageJson___version: 'pluginCreator.packageJson.version', pluginCreator___packageJson___main: 'pluginCreator.packageJson.main', pluginCreator___packageJson___license: 'pluginCreator.packageJson.license', pluginCreator___packageJson___dependencies: 'pluginCreator.packageJson.dependencies', pluginCreator___packageJson___dependencies___name: 'pluginCreator.packageJson.dependencies.name', pluginCreator___packageJson___dependencies___version: 'pluginCreator.packageJson.dependencies.version', pluginCreator___packageJson___devDependencies: 'pluginCreator.packageJson.devDependencies', pluginCreator___packageJson___devDependencies___name: 'pluginCreator.packageJson.devDependencies.name', pluginCreator___packageJson___devDependencies___version: 'pluginCreator.packageJson.devDependencies.version', pluginCreator___packageJson___peerDependencies: 'pluginCreator.packageJson.peerDependencies', pluginCreator___packageJson___peerDependencies___name: 'pluginCreator.packageJson.peerDependencies.name', pluginCreator___packageJson___peerDependencies___version: 'pluginCreator.packageJson.peerDependencies.version', pluginCreator___packageJson___keywords: 'pluginCreator.packageJson.keywords', pluginCreatorId: 'undefined' };

export type SitePageGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePageGroupConnection'] = ResolversParentTypes['SitePageGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePageEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePage']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpConnection'] = ResolversParentTypes['ImageSharpConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ImageSharpConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<ImageSharpConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['ImageSharpGroupConnection']>, ParentType, ContextType, RequireFields<ImageSharpConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpEdge'] = ResolversParentTypes['ImageSharpEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ImageSharp'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageSharpFieldsEnumResolvers = { fixed___base64: 'fixed.base64', fixed___tracedSVG: 'fixed.tracedSVG', fixed___aspectRatio: 'fixed.aspectRatio', fixed___width: 'fixed.width', fixed___height: 'fixed.height', fixed___src: 'fixed.src', fixed___srcSet: 'fixed.srcSet', fixed___srcWebp: 'fixed.srcWebp', fixed___srcSetWebp: 'fixed.srcSetWebp', fixed___originalName: 'fixed.originalName', fluid___base64: 'fluid.base64', fluid___tracedSVG: 'fluid.tracedSVG', fluid___aspectRatio: 'fluid.aspectRatio', fluid___src: 'fluid.src', fluid___srcSet: 'fluid.srcSet', fluid___srcWebp: 'fluid.srcWebp', fluid___srcSetWebp: 'fluid.srcSetWebp', fluid___sizes: 'fluid.sizes', fluid___originalImg: 'fluid.originalImg', fluid___originalName: 'fluid.originalName', fluid___presentationWidth: 'fluid.presentationWidth', fluid___presentationHeight: 'fluid.presentationHeight', gatsbyImageData: 'undefined', original___width: 'original.width', original___height: 'original.height', original___src: 'original.src', resize___src: 'resize.src', resize___tracedSVG: 'resize.tracedSVG', resize___width: 'resize.width', resize___height: 'resize.height', resize___aspectRatio: 'resize.aspectRatio', resize___originalName: 'resize.originalName', id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type' };

export type ImageSharpGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['ImageSharpGroupConnection'] = ResolversParentTypes['ImageSharpGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ImageSharpEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['ImageSharp']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginConnection'] = ResolversParentTypes['SitePluginConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SitePluginConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SitePluginConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SitePluginGroupConnection']>, ParentType, ContextType, RequireFields<SitePluginConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginEdge'] = ResolversParentTypes['SitePluginEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SitePlugin'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SitePluginFieldsEnumResolvers = { id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type', resolve: 'undefined', name: 'undefined', version: 'undefined', pluginOptions___base64Width: 'pluginOptions.base64Width', pluginOptions___stripMetadata: 'pluginOptions.stripMetadata', pluginOptions___defaultQuality: 'pluginOptions.defaultQuality', pluginOptions___failOnError: 'pluginOptions.failOnError', pluginOptions___autoFix: 'pluginOptions.autoFix', pluginOptions___language: 'pluginOptions.language', pluginOptions___includeResolvers: 'pluginOptions.includeResolvers', pluginOptions___outputPath: 'pluginOptions.outputPath', pluginOptions___emitSchema____xsrcxxxgeneratedxxxgatsbyxschemaxgraphql: 'pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxschemaxgraphql', pluginOptions___emitSchema____xsrcxxxgeneratedxxxgatsbyxintrospectionxjson: 'pluginOptions.emitSchema._xsrcxxxgeneratedxxxgatsbyxintrospectionxjson', pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql: 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql', pluginOptions___specialChars: 'pluginOptions.specialChars', pluginOptions___name: 'pluginOptions.name', pluginOptions___path: 'pluginOptions.path', pluginOptions___isTSX: 'pluginOptions.isTSX', pluginOptions___jsxPragma: 'pluginOptions.jsxPragma', pluginOptions___allExtensions: 'pluginOptions.allExtensions', pluginOptions___typeName: 'pluginOptions.typeName', pluginOptions___fieldName: 'pluginOptions.fieldName', pluginOptions___url: 'pluginOptions.url', pluginOptions___pathCheck: 'pluginOptions.pathCheck', nodeAPIs: 'undefined', browserAPIs: 'undefined', ssrAPIs: 'undefined', pluginFilepath: 'undefined', packageJson___name: 'packageJson.name', packageJson___description: 'packageJson.description', packageJson___version: 'packageJson.version', packageJson___main: 'packageJson.main', packageJson___license: 'packageJson.license', packageJson___dependencies: 'packageJson.dependencies', packageJson___dependencies___name: 'packageJson.dependencies.name', packageJson___dependencies___version: 'packageJson.dependencies.version', packageJson___devDependencies: 'packageJson.devDependencies', packageJson___devDependencies___name: 'packageJson.devDependencies.name', packageJson___devDependencies___version: 'packageJson.devDependencies.version', packageJson___peerDependencies: 'packageJson.peerDependencies', packageJson___peerDependencies___name: 'packageJson.peerDependencies.name', packageJson___peerDependencies___version: 'packageJson.peerDependencies.version', packageJson___keywords: 'packageJson.keywords' };

export type SitePluginGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SitePluginGroupConnection'] = ResolversParentTypes['SitePluginGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SitePluginEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SitePlugin']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteBuildMetadataConnection'] = ResolversParentTypes['SiteBuildMetadataConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['SiteBuildMetadataGroupConnection']>, ParentType, ContextType, RequireFields<SiteBuildMetadataConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteBuildMetadataEdge'] = ResolversParentTypes['SiteBuildMetadataEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['SiteBuildMetadata'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SiteBuildMetadataFieldsEnumResolvers = { id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type', buildTime: 'undefined' };

export type SiteBuildMetadataGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['SiteBuildMetadataGroupConnection'] = ResolversParentTypes['SiteBuildMetadataGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['SiteBuildMetadataEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['SiteBuildMetadata']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLSourceConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['GraphQLSourceConnection'] = ResolversParentTypes['GraphQLSourceConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GraphQLSourceEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['GraphQLSource']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  distinct?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType, RequireFields<GraphQLSourceConnection_distinctArgs, 'field'>>;
  max?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<GraphQLSourceConnection_maxArgs, 'field'>>;
  min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<GraphQLSourceConnection_minArgs, 'field'>>;
  sum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<GraphQLSourceConnection_sumArgs, 'field'>>;
  group?: Resolver<Array<ResolversTypes['GraphQLSourceGroupConnection']>, ParentType, ContextType, RequireFields<GraphQLSourceConnection_groupArgs, 'field'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLSourceEdgeResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['GraphQLSourceEdge'] = ResolversParentTypes['GraphQLSourceEdge']> = {
  next?: Resolver<Maybe<ResolversTypes['GraphQLSource']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['GraphQLSource'], ParentType, ContextType>;
  previous?: Resolver<Maybe<ResolversTypes['GraphQLSource']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLSourceFieldsEnumResolvers = { id: 'undefined', parent___id: 'parent.id', parent___parent___id: 'parent.parent.id', parent___parent___parent___id: 'parent.parent.parent.id', parent___parent___parent___children: 'parent.parent.parent.children', parent___parent___children: 'parent.parent.children', parent___parent___children___id: 'parent.parent.children.id', parent___parent___children___children: 'parent.parent.children.children', parent___parent___internal___content: 'parent.parent.internal.content', parent___parent___internal___contentDigest: 'parent.parent.internal.contentDigest', parent___parent___internal___description: 'parent.parent.internal.description', parent___parent___internal___fieldOwners: 'parent.parent.internal.fieldOwners', parent___parent___internal___ignoreType: 'parent.parent.internal.ignoreType', parent___parent___internal___mediaType: 'parent.parent.internal.mediaType', parent___parent___internal___owner: 'parent.parent.internal.owner', parent___parent___internal___type: 'parent.parent.internal.type', parent___children: 'parent.children', parent___children___id: 'parent.children.id', parent___children___parent___id: 'parent.children.parent.id', parent___children___parent___children: 'parent.children.parent.children', parent___children___children: 'parent.children.children', parent___children___children___id: 'parent.children.children.id', parent___children___children___children: 'parent.children.children.children', parent___children___internal___content: 'parent.children.internal.content', parent___children___internal___contentDigest: 'parent.children.internal.contentDigest', parent___children___internal___description: 'parent.children.internal.description', parent___children___internal___fieldOwners: 'parent.children.internal.fieldOwners', parent___children___internal___ignoreType: 'parent.children.internal.ignoreType', parent___children___internal___mediaType: 'parent.children.internal.mediaType', parent___children___internal___owner: 'parent.children.internal.owner', parent___children___internal___type: 'parent.children.internal.type', parent___internal___content: 'parent.internal.content', parent___internal___contentDigest: 'parent.internal.contentDigest', parent___internal___description: 'parent.internal.description', parent___internal___fieldOwners: 'parent.internal.fieldOwners', parent___internal___ignoreType: 'parent.internal.ignoreType', parent___internal___mediaType: 'parent.internal.mediaType', parent___internal___owner: 'parent.internal.owner', parent___internal___type: 'parent.internal.type', children: 'undefined', children___id: 'children.id', children___parent___id: 'children.parent.id', children___parent___parent___id: 'children.parent.parent.id', children___parent___parent___children: 'children.parent.parent.children', children___parent___children: 'children.parent.children', children___parent___children___id: 'children.parent.children.id', children___parent___children___children: 'children.parent.children.children', children___parent___internal___content: 'children.parent.internal.content', children___parent___internal___contentDigest: 'children.parent.internal.contentDigest', children___parent___internal___description: 'children.parent.internal.description', children___parent___internal___fieldOwners: 'children.parent.internal.fieldOwners', children___parent___internal___ignoreType: 'children.parent.internal.ignoreType', children___parent___internal___mediaType: 'children.parent.internal.mediaType', children___parent___internal___owner: 'children.parent.internal.owner', children___parent___internal___type: 'children.parent.internal.type', children___children: 'children.children', children___children___id: 'children.children.id', children___children___parent___id: 'children.children.parent.id', children___children___parent___children: 'children.children.parent.children', children___children___children: 'children.children.children', children___children___children___id: 'children.children.children.id', children___children___children___children: 'children.children.children.children', children___children___internal___content: 'children.children.internal.content', children___children___internal___contentDigest: 'children.children.internal.contentDigest', children___children___internal___description: 'children.children.internal.description', children___children___internal___fieldOwners: 'children.children.internal.fieldOwners', children___children___internal___ignoreType: 'children.children.internal.ignoreType', children___children___internal___mediaType: 'children.children.internal.mediaType', children___children___internal___owner: 'children.children.internal.owner', children___children___internal___type: 'children.children.internal.type', children___internal___content: 'children.internal.content', children___internal___contentDigest: 'children.internal.contentDigest', children___internal___description: 'children.internal.description', children___internal___fieldOwners: 'children.internal.fieldOwners', children___internal___ignoreType: 'children.internal.ignoreType', children___internal___mediaType: 'children.internal.mediaType', children___internal___owner: 'children.internal.owner', children___internal___type: 'children.internal.type', internal___content: 'internal.content', internal___contentDigest: 'internal.contentDigest', internal___description: 'internal.description', internal___fieldOwners: 'internal.fieldOwners', internal___ignoreType: 'internal.ignoreType', internal___mediaType: 'internal.mediaType', internal___owner: 'internal.owner', internal___type: 'internal.type', typeName: 'undefined', fieldName: 'undefined' };

export type GraphQLSourceGroupConnectionResolvers<ContextType = GatsbyResolverContext, ParentType extends ResolversParentTypes['GraphQLSourceGroupConnection'] = ResolversParentTypes['GraphQLSourceGroupConnection']> = {
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GraphQLSourceEdge']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['GraphQLSource']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GatsbyResolverContext> = {
  File?: FileResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Internal?: InternalResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Directory?: DirectoryResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  SiteSiteMetadata?: SiteSiteMetadataResolvers<ContextType>;
  SiteFunction?: SiteFunctionResolvers<ContextType>;
  SitePage?: SitePageResolvers<ContextType>;
  SitePageContext?: SitePageContextResolvers<ContextType>;
  SitePageContextProject?: SitePageContextProjectResolvers<ContextType>;
  ImageFormat?: ImageFormatResolvers;
  ImageFit?: ImageFitResolvers;
  ImageLayout?: ImageLayoutResolvers;
  ImageCropFocus?: ImageCropFocusResolvers;
  PotraceTurnPolicy?: PotraceTurnPolicyResolvers;
  ImageSharp?: ImageSharpResolvers<ContextType>;
  ImageSharpFixed?: ImageSharpFixedResolvers<ContextType>;
  ImageSharpFluid?: ImageSharpFluidResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  ImagePlaceholder?: ImagePlaceholderResolvers;
  ImageSharpOriginal?: ImageSharpOriginalResolvers<ContextType>;
  ImageSharpResize?: ImageSharpResizeResolvers<ContextType>;
  SitePlugin?: SitePluginResolvers<ContextType>;
  SitePluginPluginOptions?: SitePluginPluginOptionsResolvers<ContextType>;
  SitePluginPluginOptionsEmitSchema?: SitePluginPluginOptionsEmitSchemaResolvers<ContextType>;
  SitePluginPluginOptionsEmitPluginDocuments?: SitePluginPluginOptionsEmitPluginDocumentsResolvers<ContextType>;
  SitePluginPackageJson?: SitePluginPackageJsonResolvers<ContextType>;
  SitePluginPackageJsonDependencies?: SitePluginPackageJsonDependenciesResolvers<ContextType>;
  SitePluginPackageJsonDevDependencies?: SitePluginPackageJsonDevDependenciesResolvers<ContextType>;
  SitePluginPackageJsonPeerDependencies?: SitePluginPackageJsonPeerDependenciesResolvers<ContextType>;
  SiteBuildMetadata?: SiteBuildMetadataResolvers<ContextType>;
  GraphQLSource?: GraphQLSourceResolvers<ContextType>;
  Portfolio_About?: Portfolio_AboutResolvers<ContextType>;
  Portfolio_DateTime?: GraphQLScalarType;
  Portfolio_Admin?: Portfolio_AdminResolvers<ContextType>;
  Portfolio_AdminCount?: Portfolio_AdminCountResolvers<ContextType>;
  Portfolio_Answer?: Portfolio_AnswerResolvers<ContextType>;
  Portfolio_Question?: Portfolio_QuestionResolvers<ContextType>;
  Portfolio_Project?: Portfolio_ProjectResolvers<ContextType>;
  Portfolio_ProjectCount?: Portfolio_ProjectCountResolvers<ContextType>;
  Portfolio_TechCategory?: Portfolio_TechCategoryResolvers<ContextType>;
  Portfolio_TechCategoryCount?: Portfolio_TechCategoryCountResolvers<ContextType>;
  Portfolio_Tech?: Portfolio_TechResolvers<ContextType>;
  Portfolio_Sketch?: Portfolio_SketchResolvers<ContextType>;
  Portfolio_Message?: Portfolio_MessageResolvers<ContextType>;
  Portfolio_AffectedRowsOutput?: Portfolio_AffectedRowsOutputResolvers<ContextType>;
  Portfolio_LoginReturnType?: Portfolio_LoginReturnTypeResolvers<ContextType>;
  Portfolio_Upload?: GraphQLScalarType;
  Portfolio?: PortfolioResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  FileConnection?: FileConnectionResolvers<ContextType>;
  FileEdge?: FileEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  FileFieldsEnum?: FileFieldsEnumResolvers;
  FileGroupConnection?: FileGroupConnectionResolvers<ContextType>;
  DirectoryConnection?: DirectoryConnectionResolvers<ContextType>;
  DirectoryEdge?: DirectoryEdgeResolvers<ContextType>;
  DirectoryFieldsEnum?: DirectoryFieldsEnumResolvers;
  DirectoryGroupConnection?: DirectoryGroupConnectionResolvers<ContextType>;
  SiteConnection?: SiteConnectionResolvers<ContextType>;
  SiteEdge?: SiteEdgeResolvers<ContextType>;
  SiteFieldsEnum?: SiteFieldsEnumResolvers;
  SiteGroupConnection?: SiteGroupConnectionResolvers<ContextType>;
  SiteFunctionConnection?: SiteFunctionConnectionResolvers<ContextType>;
  SiteFunctionEdge?: SiteFunctionEdgeResolvers<ContextType>;
  SiteFunctionFieldsEnum?: SiteFunctionFieldsEnumResolvers;
  SiteFunctionGroupConnection?: SiteFunctionGroupConnectionResolvers<ContextType>;
  SitePageConnection?: SitePageConnectionResolvers<ContextType>;
  SitePageEdge?: SitePageEdgeResolvers<ContextType>;
  SitePageFieldsEnum?: SitePageFieldsEnumResolvers;
  SitePageGroupConnection?: SitePageGroupConnectionResolvers<ContextType>;
  ImageSharpConnection?: ImageSharpConnectionResolvers<ContextType>;
  ImageSharpEdge?: ImageSharpEdgeResolvers<ContextType>;
  ImageSharpFieldsEnum?: ImageSharpFieldsEnumResolvers;
  ImageSharpGroupConnection?: ImageSharpGroupConnectionResolvers<ContextType>;
  SitePluginConnection?: SitePluginConnectionResolvers<ContextType>;
  SitePluginEdge?: SitePluginEdgeResolvers<ContextType>;
  SitePluginFieldsEnum?: SitePluginFieldsEnumResolvers;
  SitePluginGroupConnection?: SitePluginGroupConnectionResolvers<ContextType>;
  SiteBuildMetadataConnection?: SiteBuildMetadataConnectionResolvers<ContextType>;
  SiteBuildMetadataEdge?: SiteBuildMetadataEdgeResolvers<ContextType>;
  SiteBuildMetadataFieldsEnum?: SiteBuildMetadataFieldsEnumResolvers;
  SiteBuildMetadataGroupConnection?: SiteBuildMetadataGroupConnectionResolvers<ContextType>;
  GraphQLSourceConnection?: GraphQLSourceConnectionResolvers<ContextType>;
  GraphQLSourceEdge?: GraphQLSourceEdgeResolvers<ContextType>;
  GraphQLSourceFieldsEnum?: GraphQLSourceFieldsEnumResolvers;
  GraphQLSourceGroupConnection?: GraphQLSourceGroupConnectionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = GatsbyResolverContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = GatsbyResolverContext> = {
  dateformat?: dateformatDirectiveResolver<any, any, ContextType>;
  link?: linkDirectiveResolver<any, any, ContextType>;
  fileByRelativePath?: fileByRelativePathDirectiveResolver<any, any, ContextType>;
  proxy?: proxyDirectiveResolver<any, any, ContextType>;
  infer?: inferDirectiveResolver<any, any, ContextType>;
  dontInfer?: dontInferDirectiveResolver<any, any, ContextType>;
  mimeTypes?: mimeTypesDirectiveResolver<any, any, ContextType>;
  childOf?: childOfDirectiveResolver<any, any, ContextType>;
  nodeInterface?: nodeInterfaceDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = GatsbyResolverContext> = DirectiveResolvers<ContextType>;
}